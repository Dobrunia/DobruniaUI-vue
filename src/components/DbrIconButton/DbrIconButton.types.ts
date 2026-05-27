export type DbrIconButtonSize = 'sm' | 'md' | 'lg';

export type DbrIconButtonVariant = 'ghost' | 'border';

export type DbrIconButtonIconColor = 'base' | 'muted' | 'primary';

export interface DbrIconButtonProps {
  /**
   * Accessible label for icon-only button (required for screen readers).
   * Slot must expose a root `<svg>` (or icon SFC with `<svg>` root) — not `v-html` wrappers.
   */
  ariaLabel: string;
  /**
   * Button size scale (matches DbrButton).
   * @default "md"
   */
  size?: DbrIconButtonSize;
  /**
   * `ghost` — no border; library sets slot `<svg>` to 100% of the square control (32 / 40 / 48).
   * Consumer icon files must use a tight `viewBox` (square glyphs) or a wide `viewBox` (horizontal glyphs) so visible paths fill as intended — the library does not crop viewBox.
   * `border` — fixed border; smaller centered icon; hover icon color only.
   * @default "ghost"
   */
  variant?: DbrIconButtonVariant;
  /**
   * Icon color (CSS token). Hover moves toward primary.
   * @default "base"
   */
  iconColor?: DbrIconButtonIconColor;
  /**
   * Disables the button and removes pointer interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Native HTML button type.
   * @default "button"
   */
  nativeType?: 'button' | 'submit' | 'reset';
}
