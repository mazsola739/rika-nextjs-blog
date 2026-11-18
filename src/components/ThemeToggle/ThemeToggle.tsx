'use client';

import Image from 'next/image';
import { BASE_PATH } from '@/constants/site';
import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.scss';

/**
 * Switch button for the light/dark theme. The sun and moon icons are decorative.
 *
 * The thumb position is set in CSS from the `data-theme` attribute of <html>,
 * so it is right from the first paint, even before React hydrates.
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" className={styles['toggle-button']} onClick={toggleTheme} aria-label="Dark theme" aria-pressed={theme === 'dark'}>
      <span className={styles['toggle-thumb']} />
      {/* Small SVGs from public/: served as they are, so the base path is added by hand. */}
      <Image src={`${BASE_PATH}/icons/sun.svg`} alt="" width={24} height={24} unoptimized />
      <Image src={`${BASE_PATH}/icons/moon.svg`} alt="" width={24} height={24} unoptimized />
    </button>
  );
};

export default ThemeToggle;
