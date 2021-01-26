import React from 'react';

interface ItemProps {
    data: any;
}

const ItemPagination: React.FC<ItemProps> = ({ data }) => {
    const { hasMore, item: page } = data;
    console.log(hasMore, page);

    return <>{/* {dataProps}
            {!data && fetching ? (
                <div>Loading...</div>
            ) : (
                data!.items.item.map((item) => (
                    <div key={item.id}>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <p>{item.textSnippet}</p>
                    </div>
                ))
            )}

            {data && data.items.hasMore ? (
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
            ) : null} */}</>;
};

export default ItemPagination;
