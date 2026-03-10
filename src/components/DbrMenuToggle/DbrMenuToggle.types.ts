export interface DbrMenuToggleProps {
  /**
   * Open/closed state for menu or side panel (v-model).
   * @default false
   */
  modelValue?: boolean;
  /**
   * Disables the control and removes pointer interaction.
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
  /**
   * Control size from global control scale.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
}
