export const LangSelectButtonSecondary = {
    baseStyle: ({ colorMode }: any) => ({
        p: "0 0.75rem",
        fontSize: "1.5rem",
        bg: colorMode === 'light' ? 'teal.500' : 'teal.200',
        _hover: { bg: colorMode === 'light' ? 'teal.600' : 'teal.300' },
        _active: { bg: colorMode === 'light' ? 'teal.600' : 'teal.300' },
    }),
}

export const LangSelectButtonDefault = {
    baseStyle: () => ({
        p: "0 0.75rem",
        fontSize: "1.5rem",
        bg: "inherit",
        _hover: {
            bg: 'secondaryL.100',
            color: 'primaryL.700',
        },
        _active: {
            bg: 'secondaryL.100',
            color: 'primaryL.700',
        },
    }),
}
