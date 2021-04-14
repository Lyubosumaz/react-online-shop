import { withApollo } from '@/utils/withApollo';
import { Box, Button, Divider, Flex, FormControl, Heading, IconButton, Input, Text } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { FaChevronLeft, FaSearch } from 'react-icons/fa';

const FourOhFour: React.FC<{}> = ({ }) => {
    const router = useRouter();

    return (
        <Flex h="100vh" bgColor="teal.300" justify="center" align="center">
            <Box pb="8rem" color="whiteAlpha.900" >
                <Flex pb="2rem">
                    <Box pr="2rem" alignSelf="center">
                        <Heading as="h1" fontSize="15rem" fontWeight="normal" lineHeight={1}>404</Heading>
                    </Box>

                    <Divider h="16rem" borderLeftWidth="0.2rem" borderColor="whiteAlpha.900" orientation="vertical" />

                    <Flex pl="2rem" flexBasis="100%" flexDirection="column" alignSelf="center">
                        <Heading as="h2" size="2xl" mb="0.5rem" fontWeight="normal">Sorry !</Heading>
                        <Text maxW="25rem" mb="2rem" fontSize="1.75rem">The Page You're Looking For Was Not Found</Text>
                        <Button
                            leftIcon={<FaChevronLeft />}
                            alignSelf="flex-start"
                            bgColor="transparent"
                            _hover={{ color: "teal.900", bgColor: "teal.400" }}
                            onClick={() => router.back()}
                        >
                            Go Back
                        </Button>
                    </Flex>
                </Flex>

                <Formik
                    initialValues={{ search: '' }}
                    validationSchema={null}
                    onSubmit={async (values, { resetForm }) => {
                        console.log("values: ", values.search, resetForm())
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form style={{ width: '100%', padding: "0.6rem", display: "flex", background: "rgba(255, 255, 255, 0.6)" }}>
                            <Field name="search">
                                {({ field, form }: any) => (
                                    <FormControl isInvalid={!!form.errors.search && !!form.touched.search}>
                                        <Input
                                            {...field}
                                            placeholder="How Can We Help?"
                                            h="100%"
                                            fontSize="xl"
                                            border={0}
                                            borderRadius={0}
                                            bgColor="teal.600"
                                            _focus={{ borderColor: 0 }}
                                            _placeholder={{ color: "teal.50" }}
                                        />
                                    </FormControl>
                                )}
                            </Field>

                            <IconButton
                                type="submit"
                                isLoading={isSubmitting}
                                aria-label="Search database"
                                icon={<FaSearch />}
                                borderRadius={0}
                                border="0.2rem solid"
                                borderColor="teal.900"
                                boxSize="3.3rem"
                                bgColor="teal.900"
                                _hover={{ color: "teal.900", bgColor: "teal.600" }}
                            />
                        </Form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
};

export default withApollo({ ssr: false })(FourOhFour);
