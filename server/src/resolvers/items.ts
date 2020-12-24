import { Items } from '../entities/Items';
import { MyContext } from '../types';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class ItemsResolver {
    @Query(() => [Items])
    items(@Ctx() { em }: MyContext): Promise<Items[]> {
        return em.find(Items, {});
    }

    @Query(() => Items, { nullable: true })
    item(@Arg('id', () => Int) id: number, @Ctx() { em }: MyContext): Promise<Items | null> {
        return em.findOne(Items, { id });
    }

    @Mutation(() => Items)
    async createItem(@Arg('title', () => String) title: string, @Ctx() { em }: MyContext): Promise<Items> {
        const post = em.create(Items, { title });
        await em.persistAndFlush(post);
        return post;
    }

    @Mutation(() => Items, { nullable: true })
    async updateItem(@Arg('id', () => Int) id: number, @Arg('title', () => String, { nullable: true }) title: string, @Ctx() { em }: MyContext): Promise<Items | null> {
        const post = await em.findOne(Items, { id });
        if (!post) {
            return null;
        }

        if (typeof title !== 'undefined') {
            post.title = title;
            await em.persistAndFlush(post);
        }

        return post;
    }

    @Mutation(() => Boolean)
    async deleteItem(@Arg('id', () => Int) id: number, @Ctx() { em }: MyContext): Promise<boolean> {
        try {
            await em.nativeDelete(Items, { id });
            return true;
        } catch {
            return false;
        }
    }
}
