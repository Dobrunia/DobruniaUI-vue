export type DbrIconButtonVariant = "primary" | "ghost" | "danger";
export type DbrIconButtonSize = "sm" | "md" | "lg";

export interface DbrIconButtonProps {
  /**
   * Button text label. Leave empty for square icon-only mode.
   * @default undefined
   */
  label?: string;
  /**
   * Visual style of the button.
   * @default "primary"
   */
  variant?: DbrIconButtonVariant;
  /**
   * Button size.
   * @default "md"
   */
  size?: DbrIconButtonSize;
  /**
   * Disables the button and removes pointer interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Native HTML button type.
   * @default "button"
   */
  nativeType?: "button" | "submit" | "reset";
  /**
   * Icon position relative to text.
   * @default "start"
   */
  iconPosition?: "start" | "end";
}
