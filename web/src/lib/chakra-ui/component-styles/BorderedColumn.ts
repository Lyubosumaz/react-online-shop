const sharedStyles = {
    width: "6.5rem",
    height: "6.5rem",
    content: '""',
    display: "block",
    position: "absolute"
}

export const BorderedColumn = {
    baseStyle: ({ colorMode }: any) => ({
        margin: "2.15rem",
        padding: "2rem 3.5rem",
        position: "relative",
        border: "0.1rem solid",
        borderColor: colorMode === 'light' ? 'primaryL.700' : 'primaryD.500',
        _before: {
            ...sharedStyles,
            top: "-2.15rem",
            left: "-2.15rem",
            borderTop: "0.85rem solid",
            borderLeft: "0.85rem solid",
            borderColor: colorMode === 'light' ? 'primaryL.700' : 'primaryD.500',
        },
        _after: {
            ...sharedStyles,
            right: "-2.15rem",
            bottom: "-2.15rem",
            borderRight: "0.85rem solid",
            borderBottom: "0.85rem solid",
            borderColor: colorMode === 'light' ? 'primaryL.700' : 'primaryD.500',
        },
    }),
}