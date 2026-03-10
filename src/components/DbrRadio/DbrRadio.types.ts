export type DbrRadioValue = string | number | boolean;

export interface DbrRadioProps {
  /**
   * Selected value in radio group.
   * @default undefined
   */
  modelValue?: DbrRadioValue;
  /**
   * Value emitted when radio gets selected.
   * @default "on"
   */
  value?: DbrRadioValue;
  /**
   * Optional label text. You can also use the default slot.
   * @default undefined
   */
  label?: string;
  /**
   * Native name attribute for grouping radios.
   * @default undefined
   */
  name?: string;
  /**
   * Disables radio interaction.
   * @default false
   */
  disabled?: boolean;
}
