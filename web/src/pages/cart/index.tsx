import React from 'react';
import { withApollo } from '../../utils/withApollo';

const Cart: React.FC<{}> = ({}) => {
    return (
        <>
            <h1>Cart</h1>
            <div>Cart</div>
        </>
    );
};

export default withApollo({ ssr: false })(Cart);
