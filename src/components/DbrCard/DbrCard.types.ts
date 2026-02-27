export type DbrCardVariant = "surface" | "bordered";

export interface DbrCardProps {
  /**
   * HTML tag used as card root element.
   */
  as?: "div" | "section" | "article";
  /**
   * Visual style of the card.
   */
  variant?: DbrCardVariant;
  /**
   * Disables hover and interactions.
   */
  disabled?: boolean;
}
