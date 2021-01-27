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
                <h6>{title}</h6>

                <div className={styles[`image`]}>
                    <span>{image ? image : 'Empty'}</span>
                </div>

                {textSnippet ? <p>{textSnippet}</p> : null}

                <h6>Price ${price}</h6>

                <MainButton text={'Buy Now'} />
            </li>
        </>
    );
};

export default Item;
