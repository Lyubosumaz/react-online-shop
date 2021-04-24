import { MeDocument, MeQuery, useConfirmEmailAcceptMutation } from '@/generated/graphql';
import { SecondaryLayout } from '@/layouts/SecondaryLayout';
import { withApollo } from '@/utils/withApollo';
import { Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const ConfirmEmail: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const [confirmEmailAccept] = useConfirmEmailAcceptMutation();
    const [errMessage, setErrMessage] = useState<string>('');

    return (
        <SecondaryLayout goBackButton="hidden">
            <Text>
                To conforms your email
                <Button
                    ml={3}
                    onClick={async () => {
                        const response = await confirmEmailAccept({
                            variables: {
                                token: typeof router.query.token === 'string' ? router.query.token : '',
                            },
                            update: (cache, { data }) => {
                                if (data?.confirmEmailAccept?.errors) return;

                                cache.writeQuery<MeQuery>({
                                    query: MeDocument,
                                    data: {
                                        __typename: 'Query',
                                        me: data?.confirmEmailAccept?.user,
                                    },
                                });
                                cache.evict({});
                            },
                        });

                        if (response.data?.confirmEmailAccept.errors) {
                            setErrMessage(response?.data?.confirmEmailAccept.errors[0].message);
                        } else if (response.data?.confirmEmailAccept) {
                            // worked
                            router.push('/profile');
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
