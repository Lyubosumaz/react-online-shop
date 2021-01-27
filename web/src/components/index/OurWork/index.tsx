import React from 'react';
import ButtonWrapper from '../../../layouts/ButtonWrapper';
import ItemWrapper from '../../../layouts/ItemWrapper';
import Wrapper from '../../../layouts/MainWrapper';
import SecondaryButton from '../../buttons/SecondaryButton';
import Item from '../../cards/Item';
import styles from './OurWork.module.scss';

const OurWork: React.FC<{}> = ({}) => {
    const items = [
        {
            title: 'Chair 01',
            image: 'Image',
            price: '100',
        },
        {
            title: 'Chair 02',
            image: 'Image',
            price: '120',
        },
        {
            title: 'Table',
            image: 'Image',
            price: '240',
        },
    ];

    return (
        <>
            <div className={styles['our-work']}>
                <Wrapper>
                    <div className={styles['container']}>
                        <header>
                            <h3>Our Work Furniture</h3>
                            <p>There are many variants of passages to Lorem Ipsum available, but the majority have suffered alteration</p>
                        </header>
                        <ItemWrapper>{items ? items.map((item, index) => <Item key={index} data={item} />) : null}</ItemWrapper>
                        <ButtonWrapper>
                            <SecondaryButton text={'Read More'} />
                        </ButtonWrapper>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default OurWork;
