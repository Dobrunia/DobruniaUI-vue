export interface DbrInputProps {
  /**
   * Input value for v-model.
   * @default ""
   */
  modelValue?: string;
  /**
   * Input label text. You can also use the default slot.
   * @default undefined
   */
  label?: string;
  /**
   * Input size.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Native input type.
   * @default "text"
   */
  type?: string;
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
