import NextLink from 'next/link';
import React from 'react';
import { withApollo } from '../../utils/withApollo';

const FourOhFour: React.FC<{}> = ({}) => {
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <NextLink href="/">
                <a>Go back home</a>
            </NextLink>
        </>
    );
};

export default withApollo({ ssr: false })(FourOhFour);
