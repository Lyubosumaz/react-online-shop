import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Post } from './Post';
import { User } from './User';

// m to n
// many to many
// user <-> posts
// user -> join table <- posts
// user -> star <- posts

@Entity()
export class Star extends BaseEntity {
    @Column({ type: 'int' })
    value: number;

    @PrimaryColumn()
    userId: number;

    @ManyToOne(() => User, (user) => user.stars)
    user: User;

    @PrimaryColumn()
    postId: number;

    @ManyToOne(() => Post, (post) => post.stars, {
        onDelete: 'CASCADE',
    })
    post: Post;
}
