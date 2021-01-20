import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Item } from './Item';
import { User } from './User';

@ObjectType()
@Entity()
export class Stars extends BaseEntity {
    @Field()
    @Column({ type: 'int' })
    value: number;

    @Field()
    @PrimaryColumn()
    userId: number;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.stars)
    user: User;

    @Field()
    @Column()
    postId: number;

    @Field(() => Item)
    @ManyToOne(() => Item, (item) => item.stars)
    item: Item;
}
