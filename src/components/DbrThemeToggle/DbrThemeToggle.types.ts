export interface DbrThemeToggleProps {
  /**
   * Whether dark theme is enabled.
   * @default false
   */
  modelValue?: boolean;
  /**
   * Control size from global size scale.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Toggle button shape.
   * @default "circle"
   */
  shape?: "circle" | "rounded";
  /**
   * Persist choice to localStorage.
   * @default true
   */
  persist?: boolean;
  /**
   * Storage key for persistence.
   * @default "dbru-theme"
   */
  storageKey?: string;
}
