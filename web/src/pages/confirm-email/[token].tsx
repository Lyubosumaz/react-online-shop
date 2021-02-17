import { Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useConfirmEmailAcceptMutation } from '../../generated/graphql';
import { withApollo } from '../../utils/withApollo';

const ConfirmEmail: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [confirmEmailAccept] = useConfirmEmailAcceptMutation();

    return (
        <Text>
            To conforms your email
            <Button
                onClick={async () => {
                    await confirmEmailAccept();
                    router.push('/');
                }}
            >
                Click Here
            </Button>
        </Text>
        // <SecondaryLayout>
        //     <Formik
        //         initialValues={{ email: '' }}
        //         validationSchema={confirmEmailValidations}
        //         onSubmit={async (values, { setErrors }) => {
        //             console.log(values);
        //             // const response = await changePassword({
        //             //     variables: {
        //             //         newPassword: values.newPassword,
        //             //         token: typeof router.query.token === 'string' ? router.query.token : '',
        //             //     },
        //             //   update: (cache, { data }) => {
        //             //     if (data?.changeUsername?.errors) return;

        //             //     cache.writeQuery<MeQuery>({
        //             //         query: MeDocument,
        //             //         data: {
        //             //             __typename: 'Query',
        //             //             me: data?.changeUsername?.user,
        //             //         },
        //             //     });
        //             //     cache.evict({ fieldName: 'items:{}' });
        //             // },
        //             // });
        //             // if (response.data?.changePassword.errors) {
        //             //     const errorMap = toErrorMap(response.data.changePassword.errors);
        //             //     if ('token' in errorMap) {
        //             //         setTokenError(errorMap.token);
        //             //     }
        //             //     setErrors(errorMap);
        //             // } else if (response.data?.changePassword.user) {
        //             //     // worked
        //             //     router.push('/');
        //             // }
        //         }}
        //     >
        //         {({ isSubmitting }) => (
        //             <Form>
        //                 <InputField name="email" placeholder="your email" label="Your Email" />
        //                 {/* {tokenError ? (
        //                     <Flex>
        //                         <Box mr={2} style={{ color: 'red' }}>
        //                             {tokenError}
        //                         </Box>
        //                         <NextLink href="/forgotten-password">
        //                             <Link>click here to get a new one</Link>
        //                         </NextLink>
        //                     </Flex>
        //                 ) : null} */}
        //                 <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
        //                     send message
        //                 </Button>
        //             </Form>
        //         )}
        //     </Formik>
        // </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(ConfirmEmail);
