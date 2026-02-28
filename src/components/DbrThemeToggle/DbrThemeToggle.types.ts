export interface DbrThemeToggleProps {
  /**
   * Whether dark theme is enabled.
   */
  modelValue?: boolean;
  /**
   * Control size from global size scale.
   */
  size?: "sm" | "md" | "lg";
  /**
   * Render toggle as square button.
   */
  square?: boolean;
  /**
   * Persist choice to localStorage.
   */
  persist?: boolean;
  /**
   * Storage key for persistence.
   */
  storageKey?: string;
}
