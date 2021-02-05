import { Arg, Ctx, Field, FieldResolver, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, UseMiddleware } from 'type-graphql';
import { getConnection } from 'typeorm';
import { Item } from '../entities/Item';
import { Star } from '../entities/Star';
import { User } from '../entities/User';
import { isAuth } from '../middleware/isAuth';
import { MyContext } from '../types';

@InputType()
class ItemInput {
    @Field()
    title: string;
    @Field()
    description: string;
}

@ObjectType()
class PaginatedItems {
    @Field(() => [Item])
    items: Item[];
    @Field()
    hasMore: boolean;
}

@Resolver(Item)
export class ItemResolver {
    @FieldResolver(() => String)
    descriptionSnippet(
        @Root()
        item: Item
    ) {
        let newDescription = item.description;

        const breakNum = 47; // cuts the description uo to 50 symbols
        if (newDescription.length >= breakNum) {
            let cutDescription = newDescription.slice(0, breakNum).trim();
            cutDescription = cutDescription.substr(0, cutDescription.length - 1) + cutDescription[cutDescription.length - 1].replace(/[-,.\s]/gm, '');
            newDescription = cutDescription.concat('...');
        }

        return newDescription;
    }

    @FieldResolver(() => User)
    creator(
        @Root()
        item: Item,
        @Ctx()
        { userLoader }: MyContext
    ) {
        return userLoader.load(item.creatorId);
    }

    @FieldResolver(() => Int, { nullable: true })
    async voteStatus(
        @Root()
        item: Item,
        @Ctx()
        { updootLoader, req }: MyContext
    ) {
        if (!req.session.userId) return null;

        const star = await updootLoader.load({
            postId: item.id,
            userId: req.session.userId,
        });

        return star ? star.value : null;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async vote(
        @Arg('postId', () => Int)
        postId: number,
        @Arg('value', () => Int)
        value: number,
        @Ctx()
        { req }: MyContext
    ) {
        const isUpdoot = value !== -1;
        const realValue = isUpdoot ? 1 : -1;
        const { userId } = req.session;

        const star = await Star.findOne({ where: { postId, userId } });

        // the user has voted on the item before
        // and they are changing their vote
        if (star && star.value !== realValue) {
            await getConnection().transaction(async (tm) => {
                await tm.query(
                    `
                        update star
                        set value = $1
                        where "postId" = $2 and "userId" = $3
                    `,
                    [realValue, postId, userId]
                );

                await tm.query(
                    `
                        update item
                        set rating = rating + $1
                        where id = $2
                    `,
                    [2 * realValue, postId]
                );
            });
        } else if (!star) {
            // has never voted before
            await getConnection().transaction(async (tm) => {
                await tm.query(
                    `
                        insert into star ("userId", "postId", value)
                        values ($1, $2, $3)
                    `,
                    [userId, postId, realValue]
                );

                await tm.query(
                    `
                        update item
                        set rating = rating + $1
                        where id = $2
                    `,
                    [realValue, postId]
                );
            });
        }

        return true;
    }

    @Query(() => PaginatedItems)
    async items(
        @Arg('limit', () => Int)
        limit: number,
        @Arg('cursor', () => String, { nullable: true })
        cursor: string | null
    ): Promise<PaginatedItems | null> {
        // 20 -> 21
        const realLimit = Math.min(50, limit);
        const reaLimitPlusOne = realLimit + 1;

        const replacements: any[] = [reaLimitPlusOne];

        if (cursor) replacements.push(new Date(parseInt(cursor)));

        const items = await getConnection().query(
            `
                select i.*
                from item i
                ${cursor ? `where i."createdAt" < $2` : ''}
                order by i."createdAt" DESC
                limit $1
            `,
            replacements
        );

        // const qb = getConnection()
        //   .getRepository(Item)
        //   .createQueryBuilder("p")
        //   .innerJoinAndSelect("p.creator", "u", 'u.id = p."creatorId"')
        //   .orderBy('p."createdAt"', "DESC")
        //   .take(reaLimitPlusOne);

        // if (cursor) {
        //   qb.where('p."createdAt" < :cursor', {
        //     cursor: new Date(parseInt(cursor)),
        //   });
        // }

        // const items = await qb.getMany();
        // console.log("items: ", items);

        return {
            items: items.slice(0, realLimit),
            hasMore: items.length === reaLimitPlusOne,
        };
    }

    @Query(() => Item, { nullable: true })
    item(
        @Arg('id', () => Int)
        id: number
    ): Promise<Item | undefined> {
        return Item.findOne(id);
    }

    @Mutation(() => Item)
    @UseMiddleware(isAuth)
    async createItem(
        @Arg('input')
        input: ItemInput,
        @Ctx()
        { req }: MyContext
    ): Promise<Item> {
        return Item.create({
            ...input,
            creatorId: req.session.userId,
        }).save();
    }

    @Mutation(() => Item, { nullable: true })
    @UseMiddleware(isAuth)
    async updateItem(
        @Arg('id', () => Int)
        id: number,
        @Arg('title')
        title: string,
        @Arg('description')
        description: string,
        @Ctx()
        { req }: MyContext
    ): Promise<Item | null> {
        const result = await getConnection()
            .createQueryBuilder()
            .update(Item)
            .set({ title, description })
            .where('id = :id and "creatorId" = :creatorId', {
                id,
                creatorId: req.session.userId,
            })
            .returning('*')
            .execute();

        return result.raw[0];
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteItem(
        @Arg('id', () => Int)
        id: number,
        @Ctx()
        { req }: MyContext
    ): Promise<boolean> {
        // not cascade way
        // const item = await Item.findOne(id);
        // if (!item) return false;
        // if (item.creatorId !== req.session.userId) {
        //   throw new Error("not authorized");
        // }

        // await Star.delete({ postId: id });
        // await Item.delete({ id });

        await Item.delete({ id, creatorId: req.session.userId });
        return true;
    }
}
