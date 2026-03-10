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
        items: ["light", "dark", "gothic", "sketch", "fullmoon", "oldmoney", "grey"],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: "light"
  },
  decorators: [
    (story, context) => {
      const themeClassMap: Record<string, string> = {
        light: "dbru-theme-light",
        dark: "dbru-theme-dark",
        gothic: "dbru-theme-gothic",
        sketch: "dbru-theme-sketch",
        fullmoon: "dbru-theme-fullmoon",
        oldmoney: "dbru-theme-oldmoney",
        grey: "dbru-theme-grey"
      };
      const themeClass = themeClassMap[context.globals.theme] ?? "dbru-theme-light";
      return {
        components: { story },
        template:
          `<div class="dbru-root dbru-text-base dbru-text-main ${themeClass}" style="padding:24px; min-height: 100vh;"><story /></div>`
      };
    }
  ]
};

export default preview;
