export const customizeTheme = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
        white: '#fafafa',
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
};