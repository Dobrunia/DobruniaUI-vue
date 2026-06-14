export interface DbrInputProps {
  /**
   * Input value for v-model.
   * @default ""
   */
  modelValue?: string;
  /**
   * Visual label text above the input. It is informational only and does not focus the control.
   * @default undefined
   */
  label?: string;
  /**
   * Placeholder text shown inside the input when empty.
   * @default undefined
   */
  placeholder?: string;
  /**
   * Control size. The label is not included in the control height.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Native input type.
   * @default "text"
   */
  type?: string;
  /**
   * Position of custom icon slot.
   * @default "left"
   */
  iconPosition?: 'left' | 'right';
  /**
   * Native name attribute for form submission.
   * @default undefined
   */
  name?: string;
  /**
   * Native id used to connect input and label.
   * @default undefined
   */
  id?: string;
  /**
   * Disables the input and removes pointer interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Marks input as required.
   * @default false
   */
  required?: boolean;
  /**
   * Native autocomplete attribute.
   * @default undefined
   */
  autocomplete?: string;
}
