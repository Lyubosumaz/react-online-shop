import { Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useConfirmEmailAcceptMutation } from '../../generated/graphql';
import SecondaryLayout from '../../layouts/SecondaryLayout';
import { toErrorMap } from '../../utils/toErrorMap';
import { withApollo } from '../../utils/withApollo';

const ConfirmEmail: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [confirmEmailAccept] = useConfirmEmailAcceptMutation();
    const [err, setErr] = useState<any>();

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

                        console.log(response);
                        if (response.data?.confirmEmailAccept.errors) {
                            setErr(toErrorMap(response.data.confirmEmailAccept.errors));
                        } else if (response.data?.confirmEmailAccept) {
                            // worked
                            // router.push('/');
                        }
                        console.log(err);
                    }}
                >
                    Click Here
                </Button>
            </Text>
            <Text>{err ? err : 'noting'}</Text>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(ConfirmEmail);
