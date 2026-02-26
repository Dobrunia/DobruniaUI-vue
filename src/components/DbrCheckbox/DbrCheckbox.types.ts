export interface DbrCheckboxProps {
  /**
   * Checked state for v-model.
   */
  modelValue?: boolean;
  /**
   * Disables the checkbox and removes pointer interaction.
   */
  disabled?: boolean;
  /**
   * Optional label text. You can also use the default slot.
   */
  label?: string;
  /**
   * Native name attribute for form submission.
   */
  name?: string;
  /**
   * Native value attribute for form submission.
   */
  value?: string;
}
