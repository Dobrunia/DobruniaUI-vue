export interface DbrAvatarProps {
  /**
   * Image source.
   * @default undefined
   */
  src?: string;
  /**
   * Alt text for the image.
   * @default undefined
   */
  alt?: string;
  /**
   * Name used to generate initials fallback.
   * @default ""
   */
  name?: string;
  /**
   * Avatar size.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Avatar shape.
   * @default "circle"
   */
  shape?: "circle" | "rounded";
}
