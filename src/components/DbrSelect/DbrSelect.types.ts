export type DbrSelectValue = string | number;
export type DbrSelectSize = 'sm' | 'md' | 'lg';

export interface DbrSelectOption {
  /**
   * Option value emitted through v-model.
   */
  value: DbrSelectValue;
  /**
   * Visible option label.
   */
  label: string;
  /**
   * Optional image URL rendered before the label.
   * @default undefined
   */
  icon?: string;
}

export interface DbrSelectProps {
  /**
   * Selected value for v-model.
   * @default null
   */
  modelValue?: DbrSelectValue | null;
  /**
   * Available options.
   */
  options: readonly DbrSelectOption[];
  /**
   * Visual label text above the select. It is informational only and does not focus/open the control.
   * @default undefined
   */
  label?: string;
  /**
   * Placeholder text shown inside the control when no option is selected.
   * @default ""
   */
  placeholder?: string;
  /**
   * Control size. The label is not included in the control height.
   * @default "md"
   */
  size?: DbrSelectSize;
  /**
   * Native name attribute. A hidden input is rendered when provided.
   * @default undefined
   */
  name?: string;
  /**
   * Trigger id.
   * @default undefined
   */
  id?: string;
  /**
   * Disables the select.
   * @default false
   */
  disabled?: boolean;
  /**
   * Marks the select as required for accessibility.
   * @default false
   */
  required?: boolean;
}
