/** Upper-cases the first character of a string, e.g. `"hello world"` -> `"Hello world"`. */
export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * Formats a date string for display, e.g. `"Wednesday, Nov 18, 2026"`.
 * @param date - An ISO 8601 date string.
 */
export const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

/** Formats a number with thousands separators, e.g. `1234` -> `"1,234"`. */
export const formatNumber = (value: number) => value.toLocaleString('en-US');

/** Shortens a text to `maxLength` characters, adding an ellipsis if it was cut. */
export const truncate = (text: string, maxLength: number) => (text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}...` : text);

/**
 * Creates a deterministic pseudo-random number generator (mulberry32).
 * The same seed always gives the same sequence of numbers in [0, 1).
 */
export const createRandom = (seed: number) => {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};
