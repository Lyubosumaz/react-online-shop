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
    @Column()
    description!: string;

    @Field()
    @Column({ type: 'int', default: 0.1 })
    price!: number;

    @Field()
    @Column({ type: 'int', default: 1 })
    rating!: number;

    @Field(() => Int, { nullable: true })
    voteStatus!: number | null;

    @Field(() => Int)
    @Column()
    creatorId: number;

    @Field()
    @ManyToOne(() => User, (user) => user.items)
    creator: User;

    @OneToMany(() => Stars, (star) => star.item)
    stars: Stars[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
