export type DbrIconButtonVariant = "primary" | "ghost" | "danger";
export type DbrIconButtonSize = "sm" | "md" | "lg";

export interface DbrIconButtonProps {
  /**
   * Button text label.
   */
  label?: string;
  /**
   * Visual style of the button.
   */
  variant?: DbrIconButtonVariant;
  /**
   * Button size.
   */
  size?: DbrIconButtonSize;
  /**
   * Disables the button and removes pointer interaction.
   */
  disabled?: boolean;
  /**
   * Native HTML button type.
   */
  nativeType?: "button" | "submit" | "reset";
  /**
   * Icon position relative to text.
   */
  iconPosition?: "start" | "end";
}
