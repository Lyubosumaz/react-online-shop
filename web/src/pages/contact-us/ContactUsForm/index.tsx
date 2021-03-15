import { contactUsValidations } from '@/utils/formValidations';
import { Box, Button, FormControl, FormErrorMessage, Heading, Input, useColorModeValue, useToken } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const ContactUsForm: React.FC<{}> = ({ }) => {
    const [lightColor, darkColor] = useToken("colors", ["primaryL.700", "primaryD.500"]);
    const mainColor = useColorModeValue(lightColor, darkColor);

    return (
        <div>
            <Heading mb={10} color={mainColor} fontSize="2.5rem">
                Contact Us*
            </Heading>

            <Formik
                initialValues={{ name: '', email: '', phoneNumber: '', massage: '' }}
                validationSchema={contactUsValidations}
                onSubmit={async (values, { resetForm }) => {
                    console.log(values) // TODO doesn't send user data anywhere
                    resetForm();
                }}
            >
                {/* TODO form fields need rework */}
                {({ isSubmitting }) => (
                    <Form style={{ width: '100%' }}>
                        <Field name="name">
                            {({ field, form }: any) => (
                                <FormControl mb={2} isInvalid={!!form.errors.name && !!form.touched.name}>
                                    <Input
                                        {...field}
                                        placeholder="Name"
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                    {form.errors.name ? (
                                        <FormErrorMessage fontSize="1.1rem">Name {form.errors.name}</FormErrorMessage>
                                    ) : (
                                        <Box mt={2} fontSize="1.1rem" visibility="hidden" color="transparent">
                                            placeholder
                                        </Box>
                                    )}
                                </FormControl>
                            )}
                        </Field>

                        <Field name="email">
                            {({ field, form }: any) => (
                                <FormControl mb={2} isInvalid={!!form.errors.email && !!form.touched.email}>
                                    <Input
                                        {...field}
                                        placeholder="Email"
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                    {form.errors.email ? (
                                        <FormErrorMessage fontSize="1.1rem">Email {form.errors.email}</FormErrorMessage>
                                    ) : (
                                        <Box mt={2} fontSize="1.1rem" visibility="hidden" color="transparent">
                                            placeholder
                                        </Box>
                                    )}
                                </FormControl>
                            )}
                        </Field>

                        <Field name="phoneNumber">
                            {({ field, form }: any) => (
                                <FormControl mb={2} isInvalid={!!form.errors.phoneNumber && !!form.touched.phoneNumber}>
                                    <Input
                                        {...field}
                                        placeholder="Massage"
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                    {form.errors.phoneNumber ? (
                                        <FormErrorMessage fontSize="1.1rem">Email {form.errors.phoneNumber}</FormErrorMessage>
                                    ) : (
                                        <Box mt={2} fontSize="1.1rem" visibility="hidden" color="transparent">
                                            placeholder
                                        </Box>
                                    )}
                                </FormControl>
                            )}
                        </Field>

                        <Field name="massage">
                            {({ field, form }: any) => (
                                <FormControl mb={2} isInvalid={!!form.errors.massage && !!form.touched.massage}>
                                    <Input
                                        {...field}
                                        placeholder="Phone Number"
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                    {form.errors.massage ? (
                                        <FormErrorMessage fontSize="1.1rem">Email {form.errors.massage}</FormErrorMessage>
                                    ) : (
                                        <Box mt={2} fontSize="1.1rem" visibility="hidden" color="transparent">
                                            placeholder
                                        </Box>
                                    )}
                                </FormControl>
                            )}
                        </Field>

                        <Box mt="4rem" d="flex" justifyContent="center">
                            <Button
                                type="submit"
                                isLoading={isSubmitting}
                                p="1.5rem 2rem"
                                border="0.1rem solid"
                                borderColor="transparent"
                                background={mainColor}
                                rounded={0}
                                fontWeight="normal"
                                color="#fff"
                                textTransform="uppercase"
                                _hover={{
                                    background: "transparent",
                                    color: mainColor,
                                    borderColor: mainColor
                                }}
                            >send</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactUsForm;
