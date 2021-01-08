import { Arg, Ctx, Field, FieldResolver, InputType, Int, Mutation, Query, Resolver, Root, UseMiddleware } from 'type-graphql';
import { getConnection } from 'typeorm';
import { Items } from '../entities/Items';
import { isAuth } from '../middleware/isAuth';
import { MyContext } from '../types';

@InputType()
class ItemsInput {
    @Field()
    title: string;
    @Field()
    description: string;
}

@Resolver(Items)
export class ItemsResolver {
    @FieldResolver(() => String)
    textSnippet(@Root() root: Items) {
        return root.description.slice(0, 50);
    }

    @Query(() => [Items])
    async items(@Arg('limit', () => Int) limit: number, @Arg('cursor', () => String, { nullable: true }) cursor: string | null): Promise<Items[]> {
        const realLimit = Math.min(50, limit);
        const qb = getConnection().getRepository(Items).createQueryBuilder('i').orderBy('"createdAt"', 'DESC').take(realLimit);

        if (cursor) {
            qb.where('"createdAt" < :cursor', { cursor: new Date(parseInt(cursor)) });
        }

        return qb.getMany();
    }

    @Query(() => Items, { nullable: true })
    async item(@Arg('id') id: number): Promise<Items | undefined> {
        return Items.findOne(id);
    }

    @Mutation(() => Items)
    @UseMiddleware(isAuth)
    async createItem(@Arg('input') input: ItemsInput, @Ctx() { req }: MyContext): Promise<Items> {
        return Items.create({
            ...input,
            customerId: req.session.userId,
        }).save();
    }

    @Mutation(() => Items, { nullable: true })
    async updateItem(@Arg('id') id: number, @Arg('title', () => String, { nullable: true }) title: string): Promise<Items | null> {
        const item = await Items.findOne(id);
        if (!item) {
            return null;
        }

        if (typeof title !== 'undefined') {
            await Items.update({ id }, { title });
        }

        return item;
    }

    @Mutation(() => Boolean)
    async deleteItem(@Arg('id') id: number): Promise<boolean> {
        try {
            await Items.delete(id);
            return true;
        } catch {
            return false;
        }
    }
}
