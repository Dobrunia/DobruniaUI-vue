export type DbrBadgeVariant = "primary" | "ghost" | "danger";

export interface DbrBadgeProps {
  /**
   * Badge text.
   */
  text?: string;
  /**
   * Visual style of the badge.
   */
  variant?: DbrBadgeVariant;
}
