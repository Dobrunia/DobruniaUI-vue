export interface DbrInputProps {
  /**
   * Input value for v-model.
   */
  modelValue?: string;
  /**
   * Input label text. You can also use the default slot.
   */
  label?: string;
  /**
   * Input size.
   */
  size?: "sm" | "md" | "lg";
  /**
   * Native input type.
   */
  type?: string;
  /**
   * Native name attribute for form submission.
   */
  name?: string;
  /**
   * Native id used to connect input and label.
   */
  id?: string;
  /**
   * Disables the input and removes pointer interaction.
   */
  disabled?: boolean;
  /**
   * Marks input as required.
   */
  required?: boolean;
  /**
   * Native autocomplete attribute.
   */
  autocomplete?: string;
}
