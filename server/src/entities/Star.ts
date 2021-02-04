import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Item } from './Item';
import { User } from './User';

// m to n
// many to many
// user <-> items
// user -> join table <- items
// user -> star <- items

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

    @ManyToOne(() => Item, (item) => item.stars, {
        onDelete: 'CASCADE',
    })
    item: Item;
}
