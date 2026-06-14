import type { Meta, StoryObj } from "@storybook/vue3";
import { renderControlHeightAlignment } from "./controlHeightAlignmentRender";

const meta: Meta = {
  title: "Foundations/Control Height Alignment",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

/** sm / md / lg — each size on one horizontal flex row (inspect dashed outlines). */
export const BySize: Story = {
  render: () => renderControlHeightAlignment(),
};
