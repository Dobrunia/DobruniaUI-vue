export type DbrBadgeVariant = "primary" | "danger" | "neutral";

export interface DbrBadgeProps {
  /**
   * Badge color style.
   * @default "primary"
   */
  variant?: DbrBadgeVariant;
  /**
   * Show dot-only badge.
   * @default false
   */
  dot?: boolean;
  /**
   * Horizontal offset from right edge.
   * @default "-6px"
   */
  offsetX?: string;
  /**
   * Vertical offset from top edge.
   * @default "-6px"
   */
  offsetY?: string;
}
