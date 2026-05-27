import type { Meta, StoryObj } from "@storybook/vue3";
import DbrIconButton from "./DbrIconButton.vue";

const meta: Meta<typeof DbrIconButton> = {
  title: "Components/Icon Button",
  component: DbrIconButton,
  tags: ["autodocs"],
  args: {
    ariaLabel: "Settings",
    size: "md",
    variant: "ghost",
    iconColor: "base",
    disabled: false,
    nativeType: "button",
  },
  argTypes: {
    ariaLabel: { control: "text" },
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["ghost", "border"] },
    iconColor: { control: "select", options: ["base", "muted", "primary"] },
    disabled: { control: "boolean" },
    nativeType: { control: "select", options: ["button", "submit", "reset"] },
  },
};

export default meta;
type Story = StoryObj<typeof DbrIconButton>;

const SettingsIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" stroke-width="2"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1 1.39 1.51H21a2 2 0 1 1 0 4h-.09c-.62 0-1.13.4-1.39 1Z" stroke="currentColor" stroke-width="2"/>
    </svg>
  `,
};

const PlusIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
};

const TrashIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7h10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

const HeartIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20.5s-7-4.35-7-10a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 5.65-7 10-7 10Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  `,
};

const BellIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 16H6l1.2-2.4A5 5 0 0 1 12 7V5a2 2 0 1 1 4 0v2a5 5 0 0 1 4.8 6.6L18 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
};

/** Wide aspect — width-first scaling should use full 40px width. */
const WideChevronIcon = {
  template: `
    <svg viewBox="0 0 36 16" fill="none" aria-hidden="true">
      <path d="M8 8H28M28 8L22 3M28 8L22 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

/** Very wide menu dots. */
const WideDotsIcon = {
  template: `
    <svg viewBox="0 0 40 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="2" fill="currentColor"/>
      <circle cx="20" cy="6" r="2" fill="currentColor"/>
      <circle cx="34" cy="6" r="2" fill="currentColor"/>
    </svg>
  `,
};

/** Tall narrow — height capped by max-height, centered. */
const TallSlidersIcon = {
  template: `
    <svg viewBox="0 0 10 28" fill="none" aria-hidden="true">
      <path d="M3 4v6M3 18v6M7 8v4M7 16v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="3" cy="6" r="2" stroke="currentColor" stroke-width="2"/>
      <circle cx="7" cy="10" r="2" stroke="currentColor" stroke-width="2"/>
      <circle cx="3" cy="20" r="2" stroke="currentColor" stroke-width="2"/>
    </svg>
  `,
};

const PanelExpandLoose = {
  template: `
    <svg viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <rect x="5.5" y="8.5" width="27" height="21" rx="4.5" stroke="currentColor" stroke-width="2" />
      <path d="M14 9.5V28.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M19 14L24 19L19 24" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
};

/** User export: square viewBox but art ~21×21 inside 38×38 — glyph looks small in ghost. */
const PanelCollapseUser = {
  template: `
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <rect x="8.5" y="8.5" width="21" height="21" rx="4.5" stroke="currentColor" stroke-width="2" />
      <path d="M15 9.5V28.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path
        d="M23.5 14L18.5 19L23.5 24"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
};

/** Same paths; viewBox cropped to the 21×21 artwork. */
const PanelCollapseUserTight = {
  template: `
    <svg viewBox="7 7 24 24" fill="none" aria-hidden="true">
      <rect x="8.5" y="8.5" width="21" height="21" rx="4.5" stroke="currentColor" stroke-width="2" />
      <path d="M15 9.5V28.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path
        d="M23.5 14L18.5 19L23.5 24"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
};

/** Loose viewBox but zoom-to-fill (crops empty margin). OK for square icons only. */
const PanelCollapseUserSlice = {
  template: `
    <svg viewBox="0 0 38 38" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect x="8.5" y="8.5" width="21" height="21" rx="4.5" stroke="currentColor" stroke-width="2" />
      <path d="M15 9.5V28.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path
        d="M23.5 14L18.5 19L23.5 24"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
};

const PanelExpandTight = {
  template: `
    <svg viewBox="5 8 28 22" fill="none" aria-hidden="true">
      <rect x="5.5" y="8.5" width="27" height="21" rx="4.5" stroke="currentColor" stroke-width="2" />
      <path d="M14 9.5V28.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M19 14L24 19L19 24" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
};

/** Wide search — art spans most of a 32×14 box. */
const WideSearchIcon = {
  template: `
    <svg viewBox="0 0 32 14" fill="none" aria-hidden="true">
      <circle cx="6" cy="7" r="4.5" stroke="currentColor" stroke-width="2"/>
      <path d="M10 10L18 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M18 4h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

type GalleryItem = {
  label: string;
  hint: string;
  ariaLabel: string;
  icon: { template: string };
};

const MEDIUM_GHOST_GALLERY: GalleryItem[] = [
  { label: "Settings", hint: "24×24 tight", ariaLabel: "Settings", icon: SettingsIcon },
  { label: "Plus", hint: "24×24 tight", ariaLabel: "Add", icon: PlusIcon },
  { label: "Trash", hint: "24×24 tight", ariaLabel: "Delete", icon: TrashIcon },
  { label: "Heart", hint: "24×24 tight", ariaLabel: "Favorite", icon: HeartIcon },
  { label: "Bell", hint: "24×24 tight", ariaLabel: "Notifications", icon: BellIcon },
  { label: "Chevron", hint: "36×16 wide", ariaLabel: "Next", icon: WideChevronIcon },
  { label: "Menu dots", hint: "40×12 wide", ariaLabel: "More options", icon: WideDotsIcon },
  { label: "Sliders", hint: "10×28 tall", ariaLabel: "Filters", icon: TallSlidersIcon },
  { label: "Search", hint: "32×14 wide", ariaLabel: "Search", icon: WideSearchIcon },
  { label: "Panel loose", hint: "38×38 loose", ariaLabel: "Expand panel loose", icon: PanelExpandLoose },
  { label: "Panel tight", hint: "5 8 28 22", ariaLabel: "Expand panel tight", icon: PanelExpandTight },
];

export const Playground: Story = {
  render: (args) => ({
    components: { DbrIconButton, SettingsIcon },
    setup: () => ({ args }),
    template: `
      <DbrIconButton v-bind="args">
        <SettingsIcon />
      </DbrIconButton>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: {
      DbrIconButton,
      SettingsIcon,
      PlusIcon,
      TrashIcon,
      HeartIcon,
      BellIcon,
      WideChevronIcon,
      WideDotsIcon,
      TallSlidersIcon,
      WideSearchIcon,
      PanelExpandLoose,
      PanelExpandTight,
      PanelCollapseUser,
      PanelCollapseUserTight,
      PanelCollapseUserSlice,
    },
    setup: () => ({ items: MEDIUM_GHOST_GALLERY }),
    template: `
      <style>
        .dbru-icon-size-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }
        .dbru-icon-size-row__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .dbru-icon-size-row__item .dbru-icon-btn {
          outline: 1px dashed var(--dbru-color-border);
          outline-offset: 1px;
        }
        .dbru-icon-size-row__tag {
          font-size: 0.6875rem;
        }
        .dbru-icon-gallery__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 320px;
        }
        .dbru-icon-gallery__cell {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }
        .dbru-icon-gallery__icon {
          flex: 0 0 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dbru-icon-gallery__icon .dbru-icon-btn {
          outline: 1px dashed var(--dbru-color-border);
          outline-offset: 1px;
        }
        .dbru-icon-gallery__meta {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2px;
          line-height: 1.25;
        }
        .dbru-icon-gallery__label {
          font-size: var(--dbru-font-size-sm, 0.875rem);
        }
        .dbru-icon-gallery__hint {
          font-size: 0.6875rem;
        }
      </style>
      <div style="display:grid; gap:28px;">
        <div>
          <div class="dbru-font-size-sm dbru-font-color-muted" style="margin-bottom:10px;">Ghost — sizes</div>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:12px;">
            <DbrIconButton aria-label="Small ghost" size="sm" variant="ghost"><SettingsIcon /></DbrIconButton>
            <DbrIconButton aria-label="Medium ghost" size="md" variant="ghost"><SettingsIcon /></DbrIconButton>
            <DbrIconButton aria-label="Large ghost" size="lg" variant="ghost"><SettingsIcon /></DbrIconButton>
            <DbrIconButton aria-label="Disabled ghost" size="md" variant="ghost" disabled><SettingsIcon /></DbrIconButton>
          </div>
        </div>
        <div>
          <div class="dbru-font-size-sm dbru-font-color-muted" style="margin-bottom:10px;">
            Panel collapse — ghost (dashed = button). Square <code>&lt;svg&gt;</code> ≠ square art: paths sit in ~21×21 of 38×38.
          </div>
          <div style="display:grid; gap:16px;">
            <div>
              <div class="dbru-font-size-sm dbru-font-color-muted" style="margin-bottom:8px;">
                As exported (<code>width/height="38"</code>, loose viewBox)
              </div>
              <div class="dbru-icon-size-row">
                <div class="dbru-icon-size-row__item">
                  <DbrIconButton aria-label="Collapse sm" size="sm" variant="ghost"><PanelCollapseUser /></DbrIconButton>
                  <span class="dbru-icon-size-row__tag dbru-font-color-muted">sm 32</span>
                </div>
                <div class="dbru-icon-size-row__item">
                  <DbrIconButton aria-label="Collapse md" size="md" variant="ghost"><PanelCollapseUser /></DbrIconButton>
                  <span class="dbru-icon-size-row__tag dbru-font-color-muted">md 40</span>
                </div>
                <div class="dbru-icon-size-row__item">
                  <DbrIconButton aria-label="Collapse lg" size="lg" variant="ghost"><PanelCollapseUser /></DbrIconButton>
                  <span class="dbru-icon-size-row__tag dbru-font-color-muted">lg 48</span>
                </div>
              </div>
            </div>
            <div>
              <div class="dbru-font-size-sm dbru-font-color-muted" style="margin-bottom:8px;">
                Cropped <code>viewBox="7 7 24 24"</code> (fills control)
              </div>
              <div class="dbru-icon-size-row">
                <div class="dbru-icon-size-row__item">
                  <DbrIconButton aria-label="Collapse sm tight" size="sm" variant="ghost"><PanelCollapseUserTight /></DbrIconButton>
                  <span class="dbru-icon-size-row__tag dbru-font-color-muted">sm</span>
                </div>
                <div class="dbru-icon-size-row__item">
                  <DbrIconButton aria-label="Collapse md tight" size="md" variant="ghost"><PanelCollapseUserTight /></DbrIconButton>
                  <span class="dbru-icon-size-row__tag dbru-font-color-muted">md</span>
                </div>
                <div class="dbru-icon-size-row__item">
                  <DbrIconButton aria-label="Collapse lg tight" size="lg" variant="ghost"><PanelCollapseUserTight /></DbrIconButton>
                  <span class="dbru-icon-size-row__tag dbru-font-color-muted">lg</span>
                </div>
              </div>
            </div>
            <div>
              <div class="dbru-font-size-sm dbru-font-color-muted" style="margin-bottom:8px;">
                Or <code>preserveAspectRatio="xMidYMid slice"</code> on loose viewBox
              </div>
              <div class="dbru-icon-size-row">
                <div class="dbru-icon-size-row__item">
                  <DbrIconButton aria-label="Collapse sm slice" size="sm" variant="ghost"><PanelCollapseUserSlice /></DbrIconButton>
                  <span class="dbru-icon-size-row__tag dbru-font-color-muted">sm</span>
                </div>
                <div class="dbru-icon-size-row__item">
                  <DbrIconButton aria-label="Collapse md slice" size="md" variant="ghost"><PanelCollapseUserSlice /></DbrIconButton>
                  <span class="dbru-icon-size-row__tag dbru-font-color-muted">md</span>
                </div>
                <div class="dbru-icon-size-row__item">
                  <DbrIconButton aria-label="Collapse lg slice" size="lg" variant="ghost"><PanelCollapseUserSlice /></DbrIconButton>
                  <span class="dbru-icon-size-row__tag dbru-font-color-muted">lg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="dbru-font-size-sm dbru-font-color-muted" style="margin-bottom:10px;">Border — sizes</div>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:12px;">
            <DbrIconButton aria-label="Small border" size="sm" variant="border"><SettingsIcon /></DbrIconButton>
            <DbrIconButton aria-label="Medium border" size="md" variant="border"><SettingsIcon /></DbrIconButton>
            <DbrIconButton aria-label="Large border" size="lg" variant="border"><SettingsIcon /></DbrIconButton>
            <DbrIconButton aria-label="Disabled border" size="md" variant="border" disabled><SettingsIcon /></DbrIconButton>
          </div>
        </div>
        <div>
          <div class="dbru-font-size-sm dbru-font-color-muted" style="margin-bottom:10px;">
            Ghost <code>md</code> — icon shapes (dashed = 40×40 button)
          </div>
          <div class="dbru-icon-gallery__list">
            <div
              v-for="item in items"
              :key="item.label"
              class="dbru-icon-gallery__cell"
            >
              <div class="dbru-icon-gallery__icon">
                <DbrIconButton
                  :aria-label="item.ariaLabel"
                  size="md"
                  variant="ghost"
                >
                  <component :is="item.icon" />
                </DbrIconButton>
              </div>
              <div class="dbru-icon-gallery__meta">
                <span class="dbru-icon-gallery__label">{{ item.label }}</span>
                <span class="dbru-icon-gallery__hint dbru-font-color-muted">{{ item.hint }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
