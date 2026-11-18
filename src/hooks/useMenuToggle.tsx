import { useState, useCallback } from 'react';

/**
 * Open/closed state for the mobile menu.
 *
 * @returns `menuOpen` - whether the menu is open,
 * `handleMenuToggle` - toggles the menu,
 * `closeMenu` - closes the menu.
 */
const useMenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return { menuOpen, handleMenuToggle, closeMenu };
};

export default useMenuToggle;
