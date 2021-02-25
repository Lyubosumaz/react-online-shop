export const getFlagIcon = (input: string) => {
    switch (input) {
        case dataLanguages.us.value:
            return dataLanguages.us.icon;
        case dataLanguages.bg.value:
            return dataLanguages.bg.icon;
        case dataLanguages.en.value:
            return dataLanguages.en.icon;
        default:
            return;
    }
}

export const dataLanguages = {
    bg: { name: "Bulgarian", value: "bg", icon: "🇧🇬" },
    en: { name: "English", value: "en", icon: "🇬🇧" },
    us: { name: "USA", value: "us", icon: "🇺🇸" },
}