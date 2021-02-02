import React, { useState } from 'react';
import { useRateMutation } from '../../../generated/graphql';
// import { ItemSnippetFragment } from '../../../generated/graphql';
import MainButton from '../../buttons/MainButton';
import styles from './Item.module.scss';

export interface ItemProps {
    // data: ItemSnippetFragment;
    data: {
        id?: number;
        title: string;
        image: string;
        price: string;
        textSnippet?: string;
        rating?: number;
        creator?: any;
    };
}

const Item: React.FC<ItemProps> = ({ data }) => {
    const { id, title, image, price, textSnippet, rating, creator } = data;
    const [loadingState, setLoadingState] = useState<'upvote-loading' | 'downvote-loading' | 'not-loading'>('not-loading');
    const [, rate] = useRateMutation();

    const buttonUp = async () => {
        if (!id) return;

        setLoadingState('upvote-loading');
        await rate({
            itemId: id,
            value: 1,
        });
        setLoadingState('not-loading');
    };

    const buttonDown = async () => {
        if (!id) return;

        setLoadingState('downvote-loading');
        await rate({
            itemId: id,
            value: -1,
        });

        setLoadingState('not-loading');
    };

    return (
        <>
            <li className={styles[`item-card`]}>
                <header className={styles.title}>
                    <h6>{title}</h6>
                </header>

                <section className={styles.picture}>
                    <div className={styles['pseudo-image']}>
                        <span>{image ? image : 'Empty'}</span>
                    </div>
                </section>

                <section className={styles.details}>
                    {true ? (
                        <div>
                            <button onClick={buttonUp}>{loadingState === 'upvote-loading' ? 'Q' : 'Up'}</button>
                            {rating ? rating : 0}
                            <button onClick={buttonDown}>{loadingState === 'downvote-loading' ? 'Q' : 'Down'}</button>
                        </div>
                    ) : null}
                    {creator ? <p>Created by: {creator.username}</p> : null}
                    {textSnippet ? <p className={styles[`description-text`]}>{textSnippet}</p> : null}

                    <h6>Price ${price}</h6>
                </section>

                <section className={styles.action}>
                    <MainButton text={'Buy Now'} />
                </section>
            </li>
        </>
    );
};

export default Item;
