export interface DbrToggleProps {
  /**
   * Checked state for v-model.
   */
  modelValue?: boolean;
  /**
   * Disables the toggle and removes pointer interaction.
   */
  disabled?: boolean;
  /**
   * Optional label text. You can also use the default slot.
   */
  label?: string;
  /**
   * Native id used to connect input and label.
   */
  id?: string;
  /**
   * Native name attribute for form submission.
   */
  name?: string;
  /**
   * Native value attribute for form submission.
   */
  value?: string;
}
