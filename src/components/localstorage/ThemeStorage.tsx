export const THEME_UPDATE_KEY = "localThemeUpdated";
const THEME_UPDATE_EVENT = new Event(THEME_UPDATE_KEY);
const THEME_KEY = "theme";
type Theme = "light" | "dark";
const DEFAULT_THEME: Theme = "light";

export const getTheme = ():Theme => {
    const themeOption = localStorage.getItem(THEME_KEY);
    let theme:Theme = DEFAULT_THEME;
    if (themeOption === "light") {
        theme = "light";
    } else if (themeOption === "dark") {
        theme = "dark";
    }
    return theme;
}

const setTheme = (theme: Theme) => {
    if (theme !== "light" && theme !== "dark") {
        throw TypeError("Theme must be either dark or light.")
    }
    const localTheme = getTheme();
    if (theme !== localTheme) {
        localStorage.setItem(THEME_KEY, theme);
        window.dispatchEvent(THEME_UPDATE_EVENT);
    }
}
export const resetTheme = () => {
    setTheme(DEFAULT_THEME);
}

export const toggleTheme = () => {
    const localTheme = getTheme();
    let newTheme: Theme;
    if (localTheme === "dark") {
        newTheme = "light"
    } else {
        newTheme = "dark";
    }
    setTheme(newTheme);
}