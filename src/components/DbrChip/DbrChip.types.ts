export type DbrChipVariant = "primary" | "ghost" | "danger";
export type DbrChipType = "default" | "removable";

export interface DbrChipProps {
  /**
   * Visual style of the chip.
   * @default "primary"
   */
  variant?: DbrChipVariant;
  /**
   * Chip behavior type.
   * @default "default"
   */
  type?: DbrChipType;
  /**
   * Removes interaction from the remove action button.
   * @default false
   */
  disabled?: boolean;
  /**
   * Accessibility label for remove button.
   * @default "Remove chip"
   */
  removeAriaLabel?: string;
}
