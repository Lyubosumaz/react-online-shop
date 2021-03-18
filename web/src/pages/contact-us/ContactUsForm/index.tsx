import { contactUsValidations } from '@/utils/formValidations';
import { Box, Button, FormControl, Heading, Input, Textarea, useColorModeValue, useToken } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const ContactUsForm: React.FC<{}> = ({ }) => {
    const [lightColor, darkColor] = useToken("colors", ["primaryL.700", "primaryD.500"]);
    const mainColor = useColorModeValue(lightColor, darkColor);

    return (
        <>
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
                                <FormControl mb={6} isInvalid={!!form.errors.name && !!form.touched.name}>
                                    <Input
                                        {...field}
                                        placeholder={form.errors.name ? `Name ${form.errors.name}` : "Name"}
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: form.errors.name ? "red" : mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Field name="email">
                            {({ field, form }: any) => (
                                <FormControl mb={6} isInvalid={!!form.errors.email && !!form.touched.email}>
                                    <Input
                                        {...field}
                                        placeholder="Email"
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: form.errors.email ? "red" : mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Field name="phoneNumber">
                            {({ field, form }: any) => (
                                <FormControl mb={6} isInvalid={!!form.errors.phoneNumber && !!form.touched.phoneNumber}>
                                    <Input
                                        {...field}
                                        placeholder="Phone Number"
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: form.errors.phoneNumber ? "red" : mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Field name="massage">
                            {({ field, form }: any) => (
                                <FormControl isInvalid={!!form.errors.massage && !!form.touched.massage}>
                                    <Textarea
                                        {...field}
                                        placeholder="Massage"
                                        fontSize="md"
                                        h="2%"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: form.errors.massage ? "red" : mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Box mt="3rem" d="flex" justifyContent="center">
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
        </>
    );
};

export default ContactUsForm;
