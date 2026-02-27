export interface DbrAvatarProps {
  /**
   * Image source.
   */
  src?: string;
  /**
   * Alt text for the image.
   */
  alt?: string;
  /**
   * Name used to generate initials fallback.
   */
  name?: string;
  /**
   * Avatar size.
   */
  size?: "sm" | "md" | "lg";
  /**
   * Avatar shape.
   */
  shape?: "circle" | "rounded";
}
