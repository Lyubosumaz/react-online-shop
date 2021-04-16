import { extendTheme } from '@chakra-ui/react';

const Card = {
    // The styles all Cards have in common
    baseStyle: {
        display: "flex",
        flexDirection: "column",
        background: "white",
        alignItems: "center",
        gap: 6,
    },
    // Two variants: rounded and smooth
    variants: {
        rounded: {
            padding: 8,
            borderRadius: "xl",
            boxShadow: "xl",
        },
        smooth: {
            padding: 6,
            borderRadius: "base",
            boxShadow: "md",
        },
    },
    // The default variant value
    defaultProps: {
        variant: "smooth",
    },
}

const customTheme = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
        black: '#16161d',
        errorColor: '#E53E3E',
        successColor: '#38A169',
        primaryL: {
            50: "#fdeee8",
            100: "#f8cbb9",
            200: "#f4a98b",
            300: "#ef865d",
            400: "#ea632e",
            500: "#d14a15",
            600: "#a23a10",
            700: "#7c2c0c", // main
            800: "#5d2109",
            900: "#2e1005",
        },
        primaryD: {
            50: "#edeff8",
            100: "#c8d0e9",
            200: "#a4b1db",
            300: "#7f91cc",
            400: "#5b72be",
            500: "#3f559f", // main
            600: "#334580",
            700: "#24315b",
            800: "#161d37",
            900: "#070a12",
        },
        secondaryL: {
            50: "#f8f4ec",
            100: "#efe4d1", // main
            200: "#e4d3b4",
            300: "#d7bc8e",
            400: "#caa668",
            500: "#bd9042",
            600: "#977335",
            700: "#715628",
            800: "#4b3a1b",
            900: "#261d0d",
        },
        secondaryD: {
            50: "#f7eef3",
            100: "#e6ccda",
            200: "#d5aac1",
            300: "#c487a9",
            400: "#b36590",
            500: "#a5517f", // main
            600: "#894369",
            700: "#67324f",
            800: "#442235",
            900: "#22111a",
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
    components: {
        Card,
    },
};

const theme = extendTheme(customTheme as any);

export default theme;
