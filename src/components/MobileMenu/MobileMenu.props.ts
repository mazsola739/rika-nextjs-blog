export interface MobileMenuProps {
  /** Whether the menu is visible. */
  menuOpen: boolean;
  /** Called when the user clicks the close button. */
  onClose: () => void;
}
