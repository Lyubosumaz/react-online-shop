import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Star } from './Star';
import { User } from './User';

@ObjectType()
@Entity()
export class Item extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({ default: 'all' })
    category!: string;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    description!: string;

    @Field()
    @Column({ type: 'numeric', default: 0.1 })
    price!: number;

    @Field()
    @Column({ type: 'int', default: 0 })
    rating!: number;

    @Field(() => Int, { nullable: true })
    voteStatus: number | null; // 1 or -1 or null

    @Field()
    @Column()
    creatorId: number;

    @Field()
    @ManyToOne(() => User, (user) => user.items)
    creator: User;

    @OneToMany(() => Star, (star) => star.item)
    stars: Star[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
