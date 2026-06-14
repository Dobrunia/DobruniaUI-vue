import { h, ref } from "vue";
import DbrAvatar from "../components/DbrAvatar/DbrAvatar.vue";
import DbrButton from "../components/DbrButton/DbrButton.vue";
import DbrButtonGroup from "../components/DbrButtonGroup/DbrButtonGroup.vue";
import DbrIconButton from "../components/DbrIconButton/DbrIconButton.vue";
import DbrInput from "../components/DbrInput/DbrInput.vue";
import DbrLoader from "../components/DbrLoader/DbrLoader.vue";
import DbrMenuToggle from "../components/DbrMenuToggle/DbrMenuToggle.vue";
import DbrThemeToggle from "../components/DbrThemeToggle/DbrThemeToggle.vue";
import DbrToggle from "../components/DbrToggle/DbrToggle.vue";
import type { DbrButtonGroupValue } from "../components/DbrButtonGroup/DbrButtonGroup.types";

type ControlSize = "sm" | "md" | "lg";

const SettingsIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" stroke-width="2"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1 1.39 1.51H21a2 2 0 1 1 0 4h-.09c-.62 0-1.13.4-1.39 1Z" stroke="currentColor" stroke-width="2"/>
    </svg>
  `,
};

const GROUP_OPTIONS = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
  { label: "C", value: "c" },
];

function itemSlot(content: ReturnType<typeof h> | string) {
  return h("div", { class: "control-height-item" }, [content]);
}

function iconButton(size: ControlSize, variant: "ghost" | "border", label: string) {
  return h(
    DbrIconButton,
    { ariaLabel: label, size, variant },
    { default: () => h(SettingsIcon) },
  );
}

function buildRow(
  size: ControlSize,
  state: {
    value: string;
    group: DbrButtonGroupValue;
    toggled: boolean;
    menu: boolean;
    dark: boolean;
    onValue: (v: string) => void;
    onGroup: (v: DbrButtonGroupValue) => void;
    onToggled: (v: boolean) => void;
    onMenu: (v: boolean) => void;
    onDark: (v: boolean) => void;
  },
) {
  return h("div", { class: "control-height-row" }, [
    itemSlot(h(DbrButton, { size, variant: "ghost" }, () => "Button")),
    itemSlot(
      h(DbrButtonGroup, {
        modelValue: state.group,
        "onUpdate:modelValue": state.onGroup,
        options: GROUP_OPTIONS,
        size,
      }),
    ),
    itemSlot(
      h(DbrInput, {
        modelValue: state.value,
        "onUpdate:modelValue": state.onValue,
        size,
        label: `${size} input`,
      }),
    ),
    itemSlot(iconButton(size, "ghost", `Settings ${size}`)),
    itemSlot(iconButton(size, "border", `Settings ${size} border`)),
    itemSlot(h(DbrAvatar, { name: "AB", size })),
    itemSlot(
      h(DbrThemeToggle, {
        modelValue: state.dark,
        "onUpdate:modelValue": state.onDark,
        size,
      }),
    ),
    itemSlot(
      h(DbrMenuToggle, {
        modelValue: state.menu,
        "onUpdate:modelValue": state.onMenu,
        size,
      }),
    ),
    itemSlot(
      h(DbrToggle, {
        modelValue: state.toggled,
        "onUpdate:modelValue": state.onToggled,
        size,
      }),
    ),
    itemSlot(h(DbrLoader, { size })),
  ]);
}

const SIZE_LABEL: Record<ControlSize, string> = {
  sm: "sm — 32px",
  md: "md — 40px",
  lg: "lg — 48px",
};

export function renderControlHeightAlignment() {
  return {
    setup() {
      const value = ref("text");
      const toggled = ref(true);
      const menu = ref(false);
      const group = ref<DbrButtonGroupValue>("b");
      const dark = ref(false);

      const state = () => ({
        value: value.value,
        group: group.value,
        toggled: toggled.value,
        menu: menu.value,
        dark: dark.value,
        onValue: (v: string) => {
          value.value = v;
        },
        onGroup: (v: DbrButtonGroupValue) => {
          group.value = v;
        },
        onToggled: (v: boolean) => {
          toggled.value = v;
        },
        onMenu: (v: boolean) => {
          menu.value = v;
        },
        onDark: (v: boolean) => {
          dark.value = v;
        },
      });

      return () =>
        h("div", { class: "control-height-root" }, [
          h("style", null, controlHeightAlignmentStyles),
          h("div", { class: "control-height-panel" }, [
          h(
            "p",
            {
              class: "dbru-font-size-sm dbru-font-color-muted",
              style: { margin: "0" },
            },
            "One flex row per size — dashed outline = outer box. Scroll horizontally if needed.",
          ),
          ...(["sm", "md", "lg"] as ControlSize[]).map((size) =>
            h("section", { key: size }, [
              h("div", { class: "control-height-tag" }, SIZE_LABEL[size]),
              buildRow(size, state()),
            ]),
          ),
          ]),
        ]);
    },
  };
}

export const controlHeightAlignmentStyles = `
  .control-height-panel {
    display: grid;
    gap: 20px;
    max-width: 100%;
  }
  .control-height-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;
    overflow-x: auto;
    overflow-y: visible;
    width: 100%;
    padding-bottom: 4px;
  }
  .control-height-item {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    outline: 1px dashed var(--dbru-color-border);
  }
  .control-height-item > .dbru-input {
    width: 140px;
  }
  .control-height-tag {
    font-size: 0.75rem;
    color: var(--dbru-color-text-muted);
    margin-bottom: 6px;
  }
`;
