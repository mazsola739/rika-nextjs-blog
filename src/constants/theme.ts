export type Theme = 'light' | 'dark';

/** Theme used on the first visit, before the user picks one. */
export const DEFAULT_THEME: Theme = 'dark';

/** localStorage key of the theme the user picked. */
export const THEME_STORAGE_KEY = 'theme';

/**
 * Inline script for `<head>`. It applies the stored theme before the first
 * paint, so a returning light-mode user does not see a dark flash.
 */
export const themeScript = `try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;
