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
        return root.description.slice(0, 50);
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

        try {
            await getConnection().query(
                `
                START TRANSACTION;
                
                insert into stars ("userId", "itemId", value)
                values (${userId},${itemId},${realValue});
                
                update item
                set rating = rating + ${realValue}
                where id = ${itemId};
                
                COMMIT;
                `
            );
        } catch (err) {
            console.error('Transaction failed');
        }

        return true;
    }

    @Query(() => PaginationItems)
    async items(
        @Arg('limit', () => Int)
        limit: number,
        @Arg('cursor', () => String, { nullable: true })
        cursor: string | null
    ): Promise<PaginationItems> {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;

        const replacements: any[] = [realLimitPlusOne];

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
                ) creator
            from item i
            inner join public.user u on u.id = i."creatorId"
            ${cursor ? `where i."createdAt" < $2` : ''}
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
        @Arg('id')
        id: number
    ): Promise<Item | undefined> {
        return Item.findOne(id);
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
