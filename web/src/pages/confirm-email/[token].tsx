import { Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useConfirmEmailAcceptMutation } from '../../generated/graphql';
import SecondaryLayout from '../../layouts/SecondaryLayout';
import { withApollo } from '../../utils/withApollo';

const ConfirmEmail: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [confirmEmailAccept] = useConfirmEmailAcceptMutation();

    return (
        <SecondaryLayout>
            <Text>
                To conforms your email
                <Button
                    ml={3}
                    onClick={async () => {
                        await confirmEmailAccept({
                            variables: {
                                token: typeof router.query.token === 'string' ? router.query.token : '',
                            },
                        });
                        // router.push('/');
                    }}
                >
                    Click Here
                </Button>
            </Text>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(ConfirmEmail);
