interface Languages {
    [key: string]: { name: string, value: string, icon: string }
}

export const _languages: Languages = {
    bg: { name: "Bulgarian", value: "bg", icon: "🇧🇬" },
    en: { name: "English", value: "en", icon: "🇬🇧" },
    us: { name: "USA", value: "us", icon: "🇺🇸" },
}

export const getLanguageIcon = (lang: string) => {
    return _languages[lang].icon
}
