export type DbrBadgeVariant = "primary" | "ghost" | "danger";

export interface DbrBadgeProps {
  /**
   * Badge text.
   * @default "Badge"
   */
  text?: string;
  /**
   * Visual style of the badge.
   * @default "primary"
   */
  variant?: DbrBadgeVariant;
}
