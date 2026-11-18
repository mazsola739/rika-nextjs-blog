import Link from 'next/link';
import { HamburgerMenu } from '../Icons/Icons';
import MobileMenu, { MOBILE_MENU_ID } from '../MobileMenu/MobileMenu';
import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

/**
 * Site header: logo, navigation and the "THE BLOG" title.
 *
 * On small screens the navigation is replaced by a hamburger button. It opens
 * the {@link MobileMenu} with the native Popover API (`popoverTarget`), so no
 * React state or JavaScript is needed to open the menu.
 */
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-nav']}>
        <Link href="/" className={styles.logo}>
          Rika
        </Link>
        <div className={styles['nav-container']}>
          <Nav />
        </div>
        <button type="button" className={styles['menu-button']} popoverTarget={MOBILE_MENU_ID} aria-label="Open menu">
          <HamburgerMenu aria-hidden="true" />
        </button>
      </div>
      <MobileMenu />
      <h1>THE BLOG</h1>
    </header>
  );
};

export default Header;
