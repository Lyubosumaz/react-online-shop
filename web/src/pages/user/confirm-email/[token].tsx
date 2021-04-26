import { MeDocument, MeQuery, useConfirmEmailAcceptMutation } from '@/generated/graphql';
import { SecondaryLayout } from '@/layouts/SecondaryLayout';
import { withApollo } from '@/utils/withApollo';
import { Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

const ConfirmEmail: FC<{}> = ({ }) => {
    const router = useRouter();
    const [confirmEmailAccept] = useConfirmEmailAcceptMutation();
    const [errMessage, setErrMessage] = useState<string>('');

    const handleConform = async () => {
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
    }

    return (
        <SecondaryLayout goBackButton="hidden">
            <Text mr={3}>To conforms your email</Text>
            <Button onClick={() => handleConform()}>Click Here</Button>
            <Text color="tomato">{typeof errMessage === 'string' ? errMessage : null}</Text>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(ConfirmEmail);
