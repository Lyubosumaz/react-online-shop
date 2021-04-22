export const ColorModeButtonMain = {
    baseStyle: () => ({
        fontSize: "1.5rem",
        color: "inherit",
        bg: "inherit",
        _hover: {
            bg: 'secondaryL.100',
            color: 'primaryL.700'
        }
    }),
}

export const ColorModeButtonSecondary = {
    baseStyle: ({ colorMode }: any) => ({
        fontSize: "1.5rem",
        color: colorMode === 'light' ? 'primaryD.50' : 'primaryD.900',
        bg: colorMode === 'light' ? 'teal.500' : 'teal.200',
        _hover: {
            bg: colorMode === 'light' ? 'teal.600' : 'teal.300'
        }
    }),
}
