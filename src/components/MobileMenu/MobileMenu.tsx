import React from 'react';
import styles from './MobileMenu.module.scss';
import { MobileMenuProps } from './MobileMenu.props';
import Nav from '../Nav/Nav';
import { Close } from '../Icons/Icons';

/**
 * Full-screen navigation for small screens. It slides in from the right when
 * `menuOpen` is true. While closed it is `inert`, so its links cannot be
 * focused with the keyboard.
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, onClose }) => {
  return (
    <div className={`${styles['mobile-menu']} ${menuOpen ? styles.open : ''}`} aria-hidden={!menuOpen} inert={!menuOpen}>
      <div className={styles['mobile-menu-content']}>
        <span>Rika</span>
        <Nav />
        <button className={styles['close-button']} onClick={onClose} aria-label="Close menu">
          <Close />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
