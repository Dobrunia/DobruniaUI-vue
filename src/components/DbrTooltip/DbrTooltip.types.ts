export interface DbrTooltipProps {
  /**
   * Tooltip text content.
   * @default "This is a cool tooltip!"
   */
  text?: string;
  /**
   * Tooltip visual variant.
   * @default undefined
   */
  variant?: "info" | "warning" | "error" | "success";
}
