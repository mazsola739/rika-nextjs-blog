import useMenuToggle from '@/hooks/useMenuToggle';
import { HamburgerMenu } from '../Icons/Icons';
import MobileMenu from '../MobileMenu/MobileMenu';
import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

/**
 * Site header: logo, navigation and the "THE BLOG" title. On small screens the
 * navigation is replaced by a hamburger button that opens the {@link MobileMenu}.
 */
const Header: React.FC = () => {
  const { menuOpen, handleMenuToggle, closeMenu } = useMenuToggle();

  const getMenuAriaLabel = () => (menuOpen ? 'Close menu' : 'Open menu');

  return (
    <header className={styles.header}>
      <div className={styles['header-nav']}>
        <span>Rika</span>
        <div className={styles['nav-container']}>
          <Nav />
        </div>
        <button className={styles['menu-button']} onClick={handleMenuToggle} aria-label={getMenuAriaLabel()}>
          <HamburgerMenu />
        </button>
      </div>
      <MobileMenu menuOpen={menuOpen} onClose={closeMenu} />
      <h1>THE BLOG</h1>
    </header>
  );
};

export default Header;
