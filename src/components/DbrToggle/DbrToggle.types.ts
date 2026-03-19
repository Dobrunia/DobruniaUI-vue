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
   * Toggle size from global control scale.
   * `xs` is local to this component and visually matches checkbox height.
   * @default "md"
   */
  size?: "xs" | "sm" | "md" | "lg";
}
