export const MainHeader = {
    baseStyle: ({ colorMode }: any) => ({
        p: "0.5rem 0",
        position: "static",
        top: "0",
        bg: colorMode === "light" ? "primaryL.700" : "primaryD.500",
        color: "secondaryL.100",
        borderTop: "0.75rem solid",
        borderBottom: "0.75rem solid",
        borderColor: "secondaryL.100",
        zIndex: "1",
    }),
}