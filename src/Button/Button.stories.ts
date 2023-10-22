import "@material/web/icon/icon.js";
import type { Meta, StoryObj } from "@storybook/web-components";
import "./index.ts";
import { html } from "lit";
import { choose } from "lit/directives/choose.js";

/** Knob types for button stories. */
export interface StoryKnobs {
  label: string;
  disabled: boolean;
  variant: "filled" | "outlined" | "text";
  color: "primary" | "primary-alt" | "secondary" | "error" | "success";
}

const meta = {
  title: "Atoms/Button",
  component: "bp-filled-button",
  argTypes: {
    label: {
      control: "text",
    },
  },
  args: {
    label: undefined,
    disabled: false,
  },
  decorators: [(story) => html`<div class="row">${story()}</div>`],
} satisfies Meta<StoryKnobs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Playground",
  argTypes: {
    label: {
      control: "text",
      description: "The text inside the button.",
      table: { type: { summary: "string" } },
    },
    variant: {
      control: "radio",
      options: ["filled", "outlined", "text"],
      description: "The variant to use.",
      table: { type: { summary: "filled | outlined | text" } },
    },
    color: {
      options: ["primary", "primary-alt", "secondary", "error", "success"],
      control: { type: "select" },
      description: "The color of the component.",
      table: {
        type: {
          detail: "primary | primary-alt | secondary | error | success",
          summary: "Colors",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "If `true`, the component is disabled.",
      type: "boolean",
      table: { type: { summary: "boolean" } },
    },
  },
  args: {
    variant: "filled",
    color: "primary",
  },
  render({ label, disabled, variant, color }) {
    return html`
      ${choose(variant, [
        [
          "filled",
          () =>
            html`<bp-filled-button class=${color} ?disabled=${disabled}
              >${label || "Filled Button"}</bp-filled-button
            >`,
        ],
        [
          "outlined",
          () =>
            html`<bp-outlined-button class=${color} ?disabled=${disabled}
              >${label || "Outlined Button"}</bp-outlined-button
            >`,
        ],
        [
          "text",
          () =>
            html`<bp-text-button class=${color} ?disabled=${disabled}
              >${label || "Text Button"}</bp-text-button
            >`,
        ],
      ])}
    `;
  },
};

export const Variants: Story = {
  name: "Button Variants",
  render({ label, disabled }) {
    return html`
      <bp-filled-button ?disabled=${disabled}
        >${label || "Filled"}</bp-filled-button
      >
      <bp-outlined-button ?disabled=${disabled}
        >${label || "Outlined"}</bp-outlined-button
      >
    `;
  },
};

export const Filled: Story = {
  name: "Filled Button",
  render({ label, disabled }) {
    return html`
      <bp-filled-button ?disabled=${disabled}>
        ${label || "Primary"}
      </bp-filled-button>
      <bp-filled-button class="primary-alt" ?disabled=${disabled}>
        ${label || "Primary Alt"}
      </bp-filled-button>
      <bp-filled-button class="secondary" ?disabled=${disabled}>
        ${label || "Secondary"}
      </bp-filled-button>
      <bp-filled-button class="error" ?disabled=${disabled}>
        ${label || "Error"}
      </bp-filled-button>
      <bp-filled-button class="success" ?disabled=${disabled}>
        ${label || "Success"}
      </bp-filled-button>
    `;
  },
};

export const Outlined: Story = {
  name: "Outlined Button",
  render({ label, disabled }) {
    return html`
      <bp-outlined-button ?disabled=${disabled}>
        ${label || "Primary"}
      </bp-outlined-button>
      <bp-outlined-button class="primary-alt" ?disabled=${disabled}>
        ${label || "Primary Alt"}
      </bp-outlined-button>
      <bp-outlined-button class="secondary" ?disabled=${disabled}>
        ${label || "Secondary"}
      </bp-outlined-button>
      <bp-outlined-button class="error" ?disabled=${disabled}>
        ${label || "Error"}
      </bp-outlined-button>
      <bp-outlined-button class="success" ?disabled=${disabled}>
        ${label || "Success"}
      </bp-outlined-button>
    `;
  },
};

export const Text: Story = {
  name: "Text Button",
  render({ label, disabled }) {
    return html`
      <bp-text-button ?disabled=${disabled}>
        ${label || "Primary"}
      </bp-text-button>
      <bp-text-button class="primary-alt" ?disabled=${disabled}>
        ${label || "Primary Alt"}
      </bp-text-button>
      <bp-text-button class="secondary" ?disabled=${disabled}>
        ${label || "Secondary"}
      </bp-text-button>
      <bp-text-button class="error" ?disabled=${disabled}>
        ${label || "Error"}
      </bp-text-button>
      <bp-text-button class="success" ?disabled=${disabled}>
        ${label || "Success"}
      </bp-text-button>
    `;
  },
};
