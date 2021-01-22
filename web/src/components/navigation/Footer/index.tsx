import { withUrqlClient } from 'next-urql';
import React from 'react';
import { createUrqlClient } from '../../../utils/createUrqlClient';


const Footer: React.FC<{}> = ({}) => {
    return (
        <>
            <h1>Footer</h1>
            <div>Footer</div>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Footer);
