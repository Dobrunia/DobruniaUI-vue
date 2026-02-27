export interface DbrThemeToggleProps {
  /**
   * Whether dark theme is enabled.
   */
  modelValue?: boolean;
  /**
   * Persist choice to localStorage.
   */
  persist?: boolean;
  /**
   * Storage key for persistence.
   */
  storageKey?: string;
}
