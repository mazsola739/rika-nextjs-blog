import { useTheme } from '@/context/ThemeContext';
import styles from './ThemeToggle.module.scss';
import Image from 'next/image';

/** Switch button for the light/dark theme. The sun and moon icons are decorative. */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <button type="button" data-theme={theme} className={styles['toggle-button']} onClick={toggleTheme} aria-label={`Switch to ${nextTheme} theme`}>
      <span className={styles['toggle-thumb']} />
      <Image src="/icons/sun.svg" alt="" width={24} height={24} />
      <Image src="/icons/moon.svg" alt="" width={24} height={24} />
    </button>
  );
};

export default ThemeToggle;
