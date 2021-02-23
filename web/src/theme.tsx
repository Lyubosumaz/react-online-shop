import { extendTheme } from '@chakra-ui/react';

const customTheme = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
        black: '#16161D',
        primaryL: {
            50: "#fdeee8",
            200: "#f8cbb9",
            300: "#f4a98b",
            400: "#ef865d",
            500: "#ea632e",
            600: "#d14a15",
            700: "#a23a10",
            800: "#7c2c0c", // main
            900: "#5d2109",
        },
        primaryD: {
            50: "#edeff8",
            200: "#c8d0e9",
            300: "#a4b1db",
            400: "#7f91cc",
            500: "#5b72be",
            600: "#3f559f", // main
            700: "#334580",
            800: "#24315b",
            900: "#161d37",
        },
        secondaryL: {
            50: "#f8f4ec",
            200: "#efe4d1", // main
            300: "#e4d3b4",
            400: "#d7bc8e",
            500: "#caa668",
            600: "#bd9042",
            700: "#977335",
            800: "#715628",
            900: "#4b3a1b",
        },
        secondaryD: {
            50: "#f7eef3",
            200: "#e6ccda",
            300: "#d5aac1",
            400: "#c487a9",
            500: "#b36590",
            600: "#a5517f", // main
            700: "#894369",
            800: "#67324f",
            900: "#442235",
        },
        rosHeader: {
            100: "#efe4d1",
            200: "#7c2c0c",
            800: "#a5517f",
            900: "#3f559f",
        },
    },
    fonts: {
        heading: 'Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
        mono: 'Menlo, monospace',
    },
    breakpoints: ['40em', '52em', '64em'],
    icons: {
        logo: {
            path: (
                <svg width="3000" height="3163" viewBox="0 0 3000 3163" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="3000" height="3162.95" fill="none" />
                    <path d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z" fill="currentColor" />
                </svg>
            ),
            viewBox: '0 0 3000 3163',
        },
    },
};

const theme = extendTheme(customTheme as any);

export default theme;
