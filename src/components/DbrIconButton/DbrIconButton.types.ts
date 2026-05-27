export type DbrIconButtonSize = 'sm' | 'md' | 'lg';

export type DbrIconButtonVariant = 'ghost' | 'border';

export type DbrIconButtonIconColor = 'base' | 'muted' | 'primary';

export interface DbrIconButtonProps {
  /**
   * Accessible label for icon-only button (required for screen readers).
   */
  ariaLabel: string;
  /**
   * Button size scale (matches DbrButton).
   * @default "md"
   */
  size?: DbrIconButtonSize;
  /**
   * `ghost` — no border; icon fills the control (32 / 40 / 48); hover changes icon color only.
   * `border` — fixed border; smaller centered icon; hover changes icon color only.
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
