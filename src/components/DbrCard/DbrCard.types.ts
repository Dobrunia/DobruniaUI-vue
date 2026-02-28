export type DbrCardVariant = "surface" | "bordered";

export interface DbrCardProps {
  /**
   * HTML tag used as card root element.
   * @default "div"
   */
  as?: "div" | "section" | "article";
  /**
   * Visual style of the card.
   * @default "surface"
   */
  variant?: DbrCardVariant;
  /**
   * Disables hover and interactions.
   * @default false
   */
  disabled?: boolean;
  /**
   * Enables hover highlight effect.
   * @default false
   */
  hoverable?: boolean;
}
