import { Items } from '../entities/Items';
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { MyContext } from 'src/types';

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
    async createItem(@Arg('input') input: ItemsInput, @Ctx() { req }: MyContext): Promise<Items> {
        // if (true) {
        if (!req.session.userId) {
            throw new Error('not authenticated');
        }

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
