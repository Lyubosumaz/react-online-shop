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
                                <FormControl
                                    mb={6}
                                    isInvalid={!!form.errors.name && !!form.touched.name}
                                >
                                    <Input
                                        {...field}
                                        placeholder={!!form.errors.name && !!form.touched.name ? `Name ${form.errors.name}` : "Name"}
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: !!form.errors.name && !!form.touched.name ? "red" : mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Field name="email">
                            {({ field, form }: any) => (
                                <FormControl
                                    mb={6}
                                    isInvalid={!!form.errors.email && !!form.touched.email}
                                >
                                    <Input
                                        {...field}
                                        placeholder={!!form.errors.email && !!form.touched.email ? `Email ${form.errors.email}` : "Email"}
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: !!form.errors.email && !!form.touched.email ? "red" : mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Field name="phoneNumber">
                            {({ field, form }: any) => (
                                <FormControl
                                    mb={6}
                                    isInvalid={!!form.errors.phoneNumber && !!form.touched.phoneNumber}
                                >
                                    <Input
                                        {...field}
                                        placeholder={!!form.errors.phoneNumber && !!form.touched.phoneNumber ? `Phone Number ${form.errors.phoneNumber}` : "Phone Number"}
                                        fontSize="md"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: !!form.errors.phoneNumber && !!form.touched.phoneNumber ? "red" : mainColor }}
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
                                        placeholder={!!form.errors.massage && !!form.touched.massage ? `Massage ${form.errors.massage}` : "Massage"}
                                        fontSize="md"
                                        h="2%"
                                        p="2rem 1rem"
                                        borderColor={mainColor}
                                        color={mainColor}
                                        _placeholder={{ color: !!form.errors.massage && !!form.touched.massage ? "red" : mainColor }}
                                        _hover={{ borderColor: mainColor }}
                                        _focus={{ borderColor: mainColor }}
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Box mt="2rem" d="flex" justifyContent="center">
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
