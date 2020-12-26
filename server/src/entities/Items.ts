import { Field, InputType, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Items extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column({ type: 'int', default: 0 })
    stars!: number;

    @Field()
    @Column()
    description!: string;

    @Field()
    @Column({ type: 'int', default: 1 })
    price!: number;

    @Field()
    @Column()
    customerId: number;
    @ManyToOne(() => User, (user) => user.products)
    cart: Items;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
