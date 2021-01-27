import React from 'react';
import Item from '../../components/cards/Item';
import styles from './ItemPagination.module.scss';

interface ItemProps {
    data: any;
    limit: any;
    paginationCallback: any;
}

const ItemPagination: React.FC<ItemProps> = ({ data, limit, paginationCallback }) => {
    const { hasMore, item: page } = data;

    const handleClick = () => {
        paginationCallback({
            limit: limit,
            cursor: page[page.length - 1].createdAt,
        });
    };

    return (
        <>
            <ul className={styles[`items-pagination`]}>
                {!page ? <div>Loading...</div> : page.map((item: any) => <Item key={item.id} data={item} />)}

                {hasMore ? <button onClick={() => handleClick()}>Load more</button> : null}
            </ul>
        </>
    );
};

export default ItemPagination;
