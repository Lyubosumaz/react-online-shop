export const ColorModeButtonMain = {
    baseStyle: ({ colorMode }: any) => ({
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
        color: "inherit",
        bg: "inherit",
        _hover: {
            bg: colorMode === 'light'
                ? 'teal.600'
                : 'teal.300'
        }
    }),
}
