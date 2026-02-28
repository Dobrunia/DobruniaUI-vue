export interface DbrCheckboxProps {
  /**
   * Checked state for v-model.
   * @default false
   */
  modelValue?: boolean;
  /**
   * Disables the checkbox and removes pointer interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional label text. You can also use the default slot.
   * @default undefined
   */
  label?: string;
  /**
   * Native name attribute for form submission.
   * @default undefined
   */
  name?: string;
  /**
   * Native value attribute for form submission.
   * @default undefined
   */
  value?: string;
}
