import { useSyncExternalStore } from 'react';
import { DEFAULT_THEME, THEME_STORAGE_KEY, type Theme } from '@/constants/theme';

/*
 * The `data-theme` attribute on <html> is the single source of truth for the
 * theme: the CSS reads it, the inline script in the root layout sets it before
 * the first paint, and this hook subscribes to it. No context provider needed.
 */

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
};

const getSnapshot = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

/** The server does not know the stored theme, so it renders the default. */
const getServerSnapshot = (): Theme => DEFAULT_THEME;

/**
 * Returns the active theme and a function that switches it.
 * The choice is saved to localStorage, so it is kept on the next visit.
 */
export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Storage can be unavailable (e.g. private mode); the theme still switches for this visit.
    }
  };

  return { theme, toggleTheme };
};
