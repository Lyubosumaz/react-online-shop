import { Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useConfirmEmailAcceptMutation } from '../../generated/graphql';
import SecondaryLayout from '../../layouts/SecondaryLayout';
import { withApollo } from '../../utils/withApollo';

const ConfirmEmail: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [confirmEmailAccept] = useConfirmEmailAcceptMutation();
    const [errMessage, setErrMessage] = useState<string>('');

    return (
        <SecondaryLayout>
            <Text>
                To conforms your email
                <Button
                    ml={3}
                    onClick={async () => {
                        const response = await confirmEmailAccept({
                            variables: {
                                token: typeof router.query.token === 'string' ? router.query.token : '',
                            },
                        });

                        if (response.data?.confirmEmailAccept.errors) {
                            setErrMessage(response?.data?.confirmEmailAccept.errors[0].message);
                        } else if (response.data?.confirmEmailAccept) {
                            // worked
                            router.push('/');
                        }
                    }}
                >
                    Click Here
                </Button>
            </Text>
            <Text color="tomato">{typeof errMessage === 'string' ? errMessage : null}</Text>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(ConfirmEmail);
