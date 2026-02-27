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
/**
 * Toggle icon switch (hamburger to close).
 * Use it for compact on/off controls.
 */
export { default as DbrToggle } from "./components/DbrToggle/DbrToggle.vue";
/**
 * Props for the DbrToggle component.
 */
export type { DbrToggleProps } from "./components/DbrToggle/DbrToggle.types";
/**
 * Base input with floating label.
 * Use it for text entry in forms.
 */
export { default as DbrInput } from "./components/DbrInput/DbrInput.vue";
/**
 * Props for the DbrInput component.
 */
export type { DbrInputProps } from "./components/DbrInput/DbrInput.types";
/**
 * Tooltip component with info icon.
 * Use it to show short helper text on hover.
 */
export { default as DbrTooltip } from "./components/DbrTooltip/DbrTooltip.vue";
/**
 * Props for the DbrTooltip component.
 */
export type { DbrTooltipProps } from "./components/DbrTooltip/DbrTooltip.types";

import DbrButton from "./components/DbrButton/DbrButton.vue";
import DbrEyesLoader from "./components/DbrEyesLoader/DbrEyesLoader.vue";
import DbrLoader from "./components/DbrLoader/DbrLoader.vue";
import DbrTerminalLoader from "./components/DbrTerminalLoader/DbrTerminalLoader.vue";
import DbrCheckbox from "./components/DbrCheckbox/DbrCheckbox.vue";
import DbrToggle from "./components/DbrToggle/DbrToggle.vue";
import DbrInput from "./components/DbrInput/DbrInput.vue";
import DbrTooltip from "./components/DbrTooltip/DbrTooltip.vue";

export default {
  install(app: import("vue").App) {
    app.component("DbrButton", DbrButton);
    app.component("DbrEyesLoader", DbrEyesLoader);
    app.component("DbrLoader", DbrLoader);
    app.component("DbrTerminalLoader", DbrTerminalLoader);
    app.component("DbrCheckbox", DbrCheckbox);
    app.component("DbrToggle", DbrToggle);
    app.component("DbrInput", DbrInput);
    app.component("DbrTooltip", DbrTooltip);
  }
};
