export interface DbrToggleProps {
  /**
   * Checked state for v-model.
   * @default false
   */
  modelValue?: boolean;
  /**
   * Disables the toggle and removes pointer interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional label text. You can also use the default slot.
   * @default undefined
   */
  label?: string;
  /**
   * Native id used to connect input and label.
   * @default undefined
   */
  id?: string;
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
