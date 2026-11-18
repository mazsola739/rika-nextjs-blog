import { allTags } from '@/constants/tags';

/** Returns 3 distinct tags picked at random from {@link allTags}. */
export const getRandomTags = () => {
  const shuffled = [...allTags].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

/** Upper-cases the first character of a string, e.g. `"hello world"` -> `"Hello world"`. */
export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * Formats a date string for display, e.g. `"Wednesday, Nov 18, 2026"`.
 * @param date - Any string `Date` can parse; ISO 8601 is recommended.
 */
export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};
