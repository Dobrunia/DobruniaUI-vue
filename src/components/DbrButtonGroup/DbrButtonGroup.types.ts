export type DbrButtonGroupValue = string | number;
export type DbrButtonGroupSize = 'sm' | 'md' | 'lg';

export interface DbrButtonGroupOption {
  /**
   * Visible label for button item.
   */
  label: string;
  /**
   * Item value used in v-model.
   */
  value: DbrButtonGroupValue;
  /**
   * Disables only this item.
   * @default false
   */
  disabled?: boolean;
}

export interface DbrButtonGroupProps {
  /**
   * Current selected value (v-model).
   * @default undefined
   */
  modelValue?: DbrButtonGroupValue;
  /**
   * Available group options.
   * @default []
   */
  options?: DbrButtonGroupOption[];
  /**
   * Control size.
   * @default "md"
   */
  size?: DbrButtonGroupSize;
  /**
   * Disables whole group.
   * @default false
   */
  disabled?: boolean;
}
