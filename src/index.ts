import "./styles/index.css";

/**
 * Button component with variants and sizes.
 * Use it for primary actions across the UI.
 */
export { default as DbrButton } from "./components/DbrButton/DbrButton.vue";
/**
 * Props for the DbrButton component.
 */
export type {
  DbrButtonProps,
  DbrButtonSize,
  DbrButtonVariant
} from "./components/DbrButton/DbrButton.types";
/**
 * Loader component with animated "eyes".
 * Use it to indicate background activity.
 */
export { default as DbrEyesLoader } from "./components/DbrEyesLoader/DbrEyesLoader.vue";
/**
 * Props for the DbrEyesLoader component.
 */
export type { DbrEyesLoaderProps } from "./components/DbrEyesLoader/DbrEyesLoader.types";
/**
 * Base dot spinner loader.
 * Use it to indicate background activity.
 */
export { default as DbrLoader } from "./components/DbrLoader/DbrLoader.vue";
/**
 * Props for the DbrLoader component.
 */
export type { DbrLoaderProps } from "./components/DbrLoader/DbrLoader.types";
/**
 * Terminal style loader with typing cursor.
 * Use it to convey scripted or developer-focused activity.
 */
export { default as DbrTerminalLoader } from "./components/DbrTerminalLoader/DbrTerminalLoader.vue";
/**
 * Props for the DbrTerminalLoader component.
 */
export type { DbrTerminalLoaderProps } from "./components/DbrTerminalLoader/DbrTerminalLoader.types";
/**
 * Checkbox component with optional label.
 * Use it for binary choices and form inputs.
 */
export { default as DbrCheckbox } from "./components/DbrCheckbox/DbrCheckbox.vue";
/**
 * Props for the DbrCheckbox component.
 */
export type { DbrCheckboxProps } from "./components/DbrCheckbox/DbrCheckbox.types";

import DbrButton from "./components/DbrButton/DbrButton.vue";
import DbrEyesLoader from "./components/DbrEyesLoader/DbrEyesLoader.vue";
import DbrLoader from "./components/DbrLoader/DbrLoader.vue";
import DbrTerminalLoader from "./components/DbrTerminalLoader/DbrTerminalLoader.vue";
import DbrCheckbox from "./components/DbrCheckbox/DbrCheckbox.vue";

export default {
  install(app: import("vue").App) {
    app.component("DbrButton", DbrButton);
    app.component("DbrEyesLoader", DbrEyesLoader);
    app.component("DbrLoader", DbrLoader);
    app.component("DbrTerminalLoader", DbrTerminalLoader);
    app.component("DbrCheckbox", DbrCheckbox);
  }
};
