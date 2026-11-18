'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { navLinks } from '@/constants/nav';
import styles from './Nav.module.scss';

/**
 * Navigation links from `navLinks` plus the theme toggle. Used in the header
 * and the mobile menu. The link of the current page gets `aria-current="page"`.
 */
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Main">
      {navLinks.map((link) => (
        <Link key={link.url} href={link.url} className={styles['nav-link']} aria-current={pathname === link.url ? 'page' : undefined}>
          {link.name}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
};

export default Nav;
