import React from 'react';
import MainButton from '../../buttons/MainButton';
import styles from './Item.module.scss';

interface ItemProps {
    data: {
        title: string;
        image: string;
        price: string;
    };
}

const Item: React.FC<ItemProps> = ({ data }) => {
    const { title, image, price } = data;

    return (
        <>
            <li className={styles[`item-card`]}>
                <h6>{title}</h6>

                <div className={styles[`image`]}>
                    <span>{image}</span>
                </div>

                <h6>{price}</h6>

                <MainButton text={'Buy Now'} />
            </li>
        </>
    );
};

export default Item;
