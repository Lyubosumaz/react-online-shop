import { Items } from '../entities/Items';
import { MyContest } from '../types';
import { Ctx, Query, Resolver } from 'type-graphql';

@Resolver()
export class ItemsResolver {
    @Query(() => [Items])
    items(@Ctx() { em }: MyContest): Promise<Items[]> {
        return em.find(Items, {});
    }
}
