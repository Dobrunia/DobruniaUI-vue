export type DbrTextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';

export interface DbrTextareaProps {
  /**
   * Textarea value for v-model.
   * @default ""
   */
  modelValue?: string;
  /**
   * Visual label text above the textarea. It is informational only and does not focus the control.
   * @default undefined
   */
  label?: string;
  /**
   * Placeholder text shown inside the textarea when empty.
   * @default undefined
   */
  placeholder?: string;
  /**
   * Native name attribute for form submission.
   * @default undefined
   */
  name?: string;
  /**
   * Native id.
   * @default undefined
   */
  id?: string;
  /**
   * Disables the textarea and removes pointer interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Marks textarea as required.
   * @default false
   */
  required?: boolean;
  /**
   * Native autocomplete attribute.
   * @default undefined
   */
  autocomplete?: string;
  /**
   * Native rows attribute.
   * @default 4
   */
  rows?: number;
  /**
   * CSS width of the textarea.
   * @default "100%"
   */
  width?: string;
  /**
   * CSS height of the textarea.
   * @default undefined
   */
  height?: string;
  /**
   * Resize behavior. Default locks manual resizing.
   * @default "none"
   */
  resize?: DbrTextareaResize;
}
