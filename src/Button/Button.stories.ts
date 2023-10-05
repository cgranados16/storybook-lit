import type { Meta, StoryObj } from "@storybook/web-components";

import "./Button";
import { html, nothing } from "lit";

const variants = {
  primary: "primary",
  "primary-alt": "primary-alt",
  secondary: "secondary",
  error: "error",
  success: "success",
};
/**
 *
 * #### `bp-button` | BpButton
 * Buttons let people take action and make choices with a single tap.
 *
 * The Button comes with three variants: Text, Contained and Outlined.
 *
 */
const meta: Meta = {
  component: "BpButton",
  title: "Atoms/Button",
  args: {
    label: "Label",
    variant: "primary",
    loading: false,
  },
  argTypes: {
    variant: {
      options: Object.keys(variants),
      mapping: variants, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
      },
    },
    icon: {
      options: ["apple", "discord", "gear"],
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Lorem Ipsum dolor sit amit
 */
export const Primary: Story = {
  argTypes: {
    variant: {
      options: Object.keys(variants),
      mapping: variants,
      control: {
        type: "select",
      },
    },
    icon: {
      options: ["", "apple", "discord", "gear"],
      control: {
        type: "select",
      },
    },
  },
  render: (args) => {
    let icon;
    if (args.icon) {
      icon = html`<sl-icon slot="prefix" name="${args.icon}"></sl-icon>`;
    }
    return html`<bp-button class="${args.variant}" ?loading=${args.loading}>
      ${icon ?? nothing} ${args.label}</bp-button
    >`;
  },
};

export const Variants: Story = {
  render: (args) =>
    html` <bp-button variant="text">${args.label}</bp-button>
      <bp-button class="primary-alt">${args.label}</bp-button>
      <bp-button class="primary-alt" outline>${args.label}</bp-button>`,
};

export const Contained: Story = {
  render: (args) => html`
    <bp-button class="primary">${args.label}</bp-button>
    <bp-button class="primary-alt">${args.label}</bp-button>
    <bp-button class="secondary">${args.label}</bp-button>
    <bp-button class="error">${args.label}</bp-button>
    <bp-button class="success">${args.label}</bp-button>
  `,
};

export const Outlined: Story = {
  render: (args) => html`
    <bp-button class="primary" outline>${args.label}</bp-button>
    <bp-button class="primary-alt" outline>${args.label}</bp-button>
    <bp-button class="secondary" outline>${args.label}</bp-button>
    <bp-button class="error" outline>${args.label}</bp-button>
    <bp-button class="success" outline>${args.label}</bp-button>
  `,
};

export const Loading: Story = {
  render: () => html`<bp-button variant="primary" loading>Loading</bp-button>`,
};

export const Prefix: Story = {
  render: () => html`
  <bp-button variant="default" size="small">
    <sl-icon slot="prefix" name="gear"></sl-icon>
    Settings
  </sl-button>
  `,
};
