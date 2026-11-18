'use client';

import { useRef } from 'react';
import styles from './MobileMenu.module.scss';
import Nav from '../Nav/Nav';
import { Close } from '../Icons/Icons';

/** Id of the popover element, referenced by the hamburger button in the header. */
export const MOBILE_MENU_ID = 'mobile-menu';

/**
 * Full-screen navigation for small screens, built on the native Popover API.
 *
 * The browser handles opening, closing with Esc, focus and accessibility.
 * The menu slides in from the right with a CSS transition (`@starting-style`).
 * It closes itself when a link inside is clicked, because the header stays
 * mounted between page navigations.
 */
const MobileMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const closeOnLinkClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).closest('a')) menuRef.current?.hidePopover();
  };

  return (
    <div ref={menuRef} id={MOBILE_MENU_ID} popover="auto" className={styles['mobile-menu']} aria-label="Menu" onClick={closeOnLinkClick}>
      <div className={styles['mobile-menu-content']}>
        <span className={styles.logo}>Rika</span>
        <Nav />
        <button type="button" className={styles['close-button']} popoverTarget={MOBILE_MENU_ID} popoverTargetAction="hide" aria-label="Close menu">
          <Close aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
