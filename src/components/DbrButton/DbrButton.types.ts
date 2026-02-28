export type DbrButtonVariant = "primary" | "ghost" | "danger";
export type DbrButtonSize = "sm" | "md" | "lg";

export interface DbrButtonProps {
  /**
   * Visual style of the button.
   * @default "primary"
   */
  variant?: DbrButtonVariant;
  /**
   * Button size scale.
   * @default "md"
   */
  size?: DbrButtonSize;
  /**
   * Disables the button and removes pointer interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Use for toggle buttons to communicate pressed state to screen readers.
   * @default undefined
   */
  pressed?: boolean;
  /**
   * Native HTML button type.
   * @default "button"
   */
  nativeType?: "button" | "submit" | "reset";
}
