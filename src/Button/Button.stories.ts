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
 * #### `bp-button` | BpButton
 * Buttons let people take action and make choices with a single tap.
 */
const meta: Meta = {
  component: "BpButton",
  title: "Atoms/Button",
  tags: ["autodocs"],
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

/**
 * The Button comes with three variants: **Text**, **Contained** and **Outlined**.
 */
export const Variants: Story = {
  args: {
    label: "Label",
    variant: "primary-alt",
    loading: false,
  },
  render: (args) =>
    html` <bp-button variant="text">${args.label}</bp-button>
      <bp-button class="${args.variant}" ?loading=${args.loading}
        >${args.label}</bp-button
      >
      <bp-button class="${args.variant}" ?loading="${args.loading}" outline
        >${args.label}</bp-button
      >`,
};

/** Contained buttons are high-emphasis, distinguished by their use of
 * elevation and fill. They contain actions that are primary to your app. */
export const Contained: Story = {
  render: (args) => html`
    <bp-button class="primary">${args.label}</bp-button>
    <bp-button class="primary-alt">${args.label}</bp-button>
    <bp-button class="secondary">${args.label}</bp-button>
    <bp-button class="error">${args.label}</bp-button>
    <bp-button class="success">${args.label}</bp-button>
  `,
};

/** Use the outline attribute to draw outlined buttons with transparent backgrounds. */
export const Outlined: Story = {
  render: (args) => html`
    <bp-button class="primary" outline>${args.label}</bp-button>
    <bp-button class="primary-alt" outline>${args.label}</bp-button>
    <bp-button class="secondary" outline>${args.label}</bp-button>
    <bp-button class="error" outline>${args.label}</bp-button>
    <bp-button class="success" outline>${args.label}</bp-button>
  `,
};

/** Use the prefix and suffix slots to add icons.
 * By default Shoelace uses Bootstrap icons, but we
 * can also use custom icons or even Font Awesome icons. */
export const Icons: Story = {
  render: () => html`
    <bp-button class="secondary">
      <sl-icon slot="prefix" name="gear"></sl-icon>
      Settings
    </bp-button>
    <bp-button variant="text" class="primary-alt">
      Font Awesome Icon
      <sl-icon
        slot="suffix"
        class="primary"
        library="fa"
        name="fas-font-awesome"
      ></sl-icon>
    </bp-button>
    <bp-button variant="text" caret>Dropdown Menu</bp-button>
  `,
};

/** Use the loading attribute to make a button busy.
 * The width will remain the same as before, preventing
 * adjacent elements from moving around. Clicks will be
 * suppressed until the loading state is removed. */
export const Loading: Story = {
  render: () => html`<bp-button variant="primary" loading>Loading</bp-button>`,
};
