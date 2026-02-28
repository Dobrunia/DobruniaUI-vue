import type { Preview } from "@storybook/vue3";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    a11y: { disable: false }
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: "light"
  },
  decorators: [
    (story, context) => {
      const themeClass =
        context.globals.theme === "dark" ? "dbru-theme-dark" : "";
      return {
        components: { story },
        template:
          `<div class="dbru-root dbru-text-base dbru-text-main ${themeClass}" style="padding:24px; min-height: 100vh;"><story /></div>`
      };
    }
  ]
};

export default preview;
