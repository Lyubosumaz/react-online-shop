import { Stars } from 'src/entities/Stars';
import { Arg, Ctx, Field, FieldResolver, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, UseMiddleware } from 'type-graphql';
import { getConnection } from 'typeorm';
import { Item } from '../entities/Item';
import { isAuth } from '../middleware/isAuth';
import { MyContext } from '../types';

@InputType()
class ItemsInput {
    @Field()
    title: string;
    @Field()
    description: string;
}

@ObjectType()
class PaginationItems {
    @Field(() => [Item])
    item: Item[];
    @Field()
    hasMore: boolean;
}

@Resolver(Item)
export class ItemResolver {
    @FieldResolver(() => String)
    textSnippet(
        @Root()
        root: Item
    ) {
        let newDescription = root.description;

        const breakNum = 47; // cuts the description to 50 symbols
        if (newDescription.length > breakNum) {
            let cutDescription = newDescription.slice(0, breakNum).trim();
            cutDescription = cutDescription.substr(0, cutDescription.length - 1) + cutDescription[cutDescription.length - 1].replace(/[,.\s]/gm, '');
            newDescription = cutDescription;
        }

        return newDescription.concat('...');
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async rate(
        @Arg('itemId', () => Int)
        itemId: number,
        @Arg('value', () => Int)
        value: number,
        @Ctx() { req }: MyContext
    ) {
        const isUpVote = value !== -1;
        const realValue = isUpVote ? 1 : -1;
        const { userId } = req.session;
        const upvote = await Stars.findOne({ where: { itemId, userId } });

        // the user has voted on the post before
        // and they are changing their vote
        if (upvote && upvote.value !== realValue) {
            await getConnection().transaction(async (tm) => {
                await tm.query(
                    `
                        update stars
                        set value = $1
                        where "itemId" = $2 and "userId" = $3
                    `,
                    [realValue, itemId, userId]
                );

                await tm.query(
                    `
                        update item
                        set rating = rating + $1
                        where id = $2;
                    `,
                    [2 * realValue, itemId]
                );
            });
        } else if (!upvote) {
            // has never voted before
            await getConnection().transaction(async (tm) => {
                await tm.query(
                    `
                        insert into stars ("userId", "itemId", value)
                        values ($1, $2, $3);
                    `,
                    [userId, itemId, realValue]
                );

                await tm.query(
                    `
                        update item
                        set rating = rating + $1
                        where id = $2;
                    `,
                    [realValue, itemId]
                );
            });
        }

        return true;
    }

    @Query(() => PaginationItems)
    async items(
        @Arg('limit', () => Int)
        limit: number,
        @Arg('cursor', () => String, { nullable: true })
        cursor: string | null,
        @Ctx()
        { req }: MyContext
    ): Promise<PaginationItems> {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;

        const replacements: any[] = [realLimitPlusOne, req.session.userId];

        if (cursor) {
            replacements.push(new Date(parseInt(cursor)));
        }

        const items = await getConnection().query(
            `
            select i.*,
            json_build_object(
                'id', u.id,
                'username', u.username,
                'email', u.email,
                'createdAt', u."createdAt",
                'updatedAt', u."updatedAt"
                ) creator,
            ${req.session.userId ? '(select value from stars where "userId" = $2 and "itemId" = i.id) = "voteStatus"' : 'null as "voteStatus"'}
            from item i
            inner join public.user u on u.id = i."creatorId"
            ${cursor ? `where i."createdAt" < $3` : ''}
            order by i."createdAt" DESC
            limit $1

            `,
            replacements
        );

        return {
            item: items.slice(0, realLimit),
            hasMore: items.length === realLimitPlusOne,
        };
    }

    @Query(() => Item, { nullable: true })
    async item(
        @Arg('id', () => Int)
        id: number
    ): Promise<Item | undefined> {
        return Item.findOne(id, { relations: ['creator'] });
    }

    @Mutation(() => Item)
    @UseMiddleware(isAuth)
    async createItem(
        @Arg('input')
        input: ItemsInput,
        @Ctx()
        { req }: MyContext
    ): Promise<Item> {
        return Item.create({
            ...input,
            creatorId: req.session.userId,
        }).save();
    }

    @Mutation(() => Item, { nullable: true })
    async updateItem(
        @Arg('id')
        id: number,
        @Arg('title', () => String, { nullable: true })
        title: string
    ): Promise<Item | null> {
        const item = await Item.findOne(id);
        if (!item) {
            return null;
        }

        if (typeof title !== 'undefined') {
            await Item.update({ id }, { title });
        }

        return item;
    }

    @Mutation(() => Boolean)
    async deleteItem(
        @Arg('id')
        id: number
    ): Promise<boolean> {
        try {
            await Item.delete(id);
            return true;
        } catch {
            return false;
        }
    }
}
