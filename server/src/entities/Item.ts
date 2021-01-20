import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Stars } from './Stars';
import { User } from './User';

@ObjectType()
@Entity()
export class Item extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column({ type: 'int', default: 0 })
    rating!: number;

    @Field()
    @Column()
    description!: string;

    @Field()
    @Column({ type: 'int', default: 1 })
    price!: number;

    @Field()
    @Column()
    customerId: number;

    @Field()
    @ManyToOne(() => User, (user) => user.items)
    creator: Item;

    @OneToMany(() => Stars, (star) => star.item)
    stars: Stars[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
