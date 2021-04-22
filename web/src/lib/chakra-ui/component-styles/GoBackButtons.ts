export const GoBackButtonProduct = {
    baseStyle: ({ colorMode }: any) => ({
        size: "sm",
        border: "0.1rem solid",
        borderColor: colorMode === 'light' ? 'primaryL.600' : 'primaryD.500',
        _hover: {
            color: "white",
            bg: colorMode === 'light' ? 'primaryL.600' : 'primaryD.500',
        },
    }),
}

export const GoBackButtonSecondary = {
    baseStyle: ({ colorMode }: any) => ({
        color: colorMode === 'light' ? 'primaryD.50' : 'primaryD.900',
        bg: colorMode === 'light' ? 'teal.500' : 'teal.200',
        _hover: { bg: colorMode === 'light' ? 'teal.600' : 'teal.300' },
    }),
}

export const GoBackButtonDefault = {
    baseStyle: () => ({
        color: "secondaryL.100",
        bg: 'primaryL.700',
        _hover: {
            color: 'primaryL.700',
            bg: 'secondaryL.100',
        },
    }),
}
