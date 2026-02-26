export type DbrButtonVariant = "primary" | "ghost" | "danger";
export type DbrButtonSize = "sm" | "md" | "lg";

export interface DbrButtonProps {
  /**
   * Visual style of the button.
   */
  variant?: DbrButtonVariant;
  /**
   * Button size scale.
   */
  size?: DbrButtonSize;
  /**
   * Disables the button and removes pointer interaction.
   */
  disabled?: boolean;
  /**
   * Use for toggle buttons to communicate pressed state to screen readers.
   */
  pressed?: boolean;
  /**
   * Native HTML button type.
   */
  nativeType?: "button" | "submit" | "reset";
}
