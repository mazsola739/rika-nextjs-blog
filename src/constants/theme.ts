export type Theme = 'light' | 'dark';

/** Theme the site opens in, until the user switches it. */
export const DEFAULT_THEME: Theme = 'dark';

/**
 * sessionStorage key of the theme the user switched to.
 *
 * sessionStorage keeps the choice only for the current visit (reloads and
 * pages opened in the same tab), so every new visit opens in the dark theme.
 * The key is namespaced because all GitHub Pages sites of the account share
 * one origin, and so one storage.
 */
export const THEME_STORAGE_KEY = 'rika-blog-theme';

/**
 * Inline script for `<head>`. It applies the theme picked during this visit
 * before the first paint, so a reload in light mode does not flash dark.
 */
export const themeScript = `try{var t=sessionStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;
