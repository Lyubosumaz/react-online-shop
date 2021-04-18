export const ActionButtons = {
    baseStyle: ({ colorMode }: any) => ({
        border: `0.1rem solid var(--chakra-colors-${colorMode === "light" ? "primaryL-600" : "primaryD-500"})`,
        _hover: {
            color: "white",
            bgColor: colorMode === "light" ? "primaryL.600" : "primaryD.500",
        },
    }),
}
