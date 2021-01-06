import { Items } from '../entities/Items';
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { MyContext } from '../types';
import { isAuth } from '../middleware/isAuth';

@InputType()
class ItemsInput {
    @Field()
    title: string;
    @Field()
    description: string;
}

@Resolver()
export class ItemsResolver {
    @Query(() => [Items])
    async items(): Promise<Items[]> {
        return Items.find();
    }

    @Query(() => Items, { nullable: true })
    async item(@Arg('id') id: number): Promise<Items | undefined> {
        return Items.findOne(id);
    }

    @Mutation(() => Items)
    // TODO that is graphql validation that is not working because of redis
    // @UseMiddleware(isAuth)
    async createItem(@Arg('input') input: ItemsInput, @Ctx() { req }: MyContext): Promise<Items> {
        // TODO have problem with redis session, this validation check is user is logged to create
        console.log(req.session);
        // if (!req.session.userId) {
        //     throw new Error('not authenticated');
        // }

        return Items.create({
            ...input,
            // customerId: req.session.userId,
            customerId: 1,
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
