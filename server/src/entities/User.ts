import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Item } from './Item';
import { Star } from './Star';

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({ unique: true })
    username!: string;

    @Field()
    @Column({ unique: true })
    email!: string;

    @Field()
    @Column({ type: 'int', default: -1 })
    emailStatus!: number;

    @Column()
    password!: string;

    @OneToMany(() => Item, (item) => item.creator)
    items: Item[];

    @OneToMany(() => Star, (star) => star.user)
    stars: Star[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
