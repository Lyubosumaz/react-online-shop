import React from 'react';
import MainButton from '../../components/buttons/MainButton';
import Item from '../../components/cards/Item';
import ButtonWrapper from '../ButtonWrapper';
import ItemWrapper from '../ItemWrapper';
import Wrapper from '../MainWrapper';
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
            <div className={styles[`items-pagination-component`]}>
                <Wrapper>
                    <ItemWrapper>{!page ? <div>Loading...</div> : page.map((item: any) => <Item key={item.id} data={item} />)}</ItemWrapper>

                    {hasMore ? (
                        <ButtonWrapper>
                            <MainButton text={'Load more'} onClick={() => handleClick()} />
                        </ButtonWrapper>
                    ) : null}
                </Wrapper>
            </div>
        </>
    );
};

export default ItemPagination;
