import React, { useState } from 'react';
import Item from '../../components/cards/Item';

interface ItemProps {
    data: any;
}

const ItemPagination: React.FC<ItemProps> = ({ data }) => {
    const { hasMore, item: page } = data;
    const [variables, setVariables] = useState({
        limit: 15,
        cursor: null as string | null,
    });
    console.log(hasMore, page);

    return (
        <>
            {!page ? <div>Loading...</div> : page.map((item: any) => <Item key={item.id} data={item} />)}

            {hasMore ? (
                <button
                    onClick={() => {
                        setVariables({
                            limit: variables.limit,
                            cursor: data.items.item[data.items.item.length - 1].createdAt,
                        });
                    }}
                >
                    Load more
                </button>
            ) : null}
        </>
    );
};

export default ItemPagination;
