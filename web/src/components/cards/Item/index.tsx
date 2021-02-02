import React from 'react';
// import { ItemSnippetFragment } from '../../../generated/graphql';
import MainButton from '../../buttons/MainButton';
import styles from './Item.module.scss';

export interface ItemProps {
    // data: ItemSnippetFragment;
    data: {
        title: string;
        image: string;
        price: string;
        textSnippet?: string;
        rating?: number;
        creator?: any;
    };
}

const Item: React.FC<ItemProps> = ({ data }) => {
    const { title, image, price, textSnippet, rating, creator } = data;

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
                    {true && rating ? (
                        <div>
                            <button>Up</button>
                            {rating ? rating : 0}
                            <button>Down</button>
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
