import "./styles/index.css";

import DbrButton from "./components/DbrButton.vue";

export { DbrButton };

export default {
  install(app: import("vue").App) {
    app.component("DbrButton", DbrButton);
  }
};
