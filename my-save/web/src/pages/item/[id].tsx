import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react';
import { createUrqlClient } from '../../utils/createUrqlClient';

const Item: React.FC<{}> = ({}) => {
    const router = useRouter();

    return (
        <>
            <h1>Item</h1>
            <div>Item</div>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Item);
