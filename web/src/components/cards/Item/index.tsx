import React from 'react';
import MainButton from '../../buttons/MainButton';
import styles from './Item.module.scss';

export interface ItemProps {
    data: {
        title: string;
        image: string;
        price: string;
        textSnippet?: string;
    };
}

const Item: React.FC<ItemProps> = ({ data }) => {
    const { title, image, price, textSnippet } = data;

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
