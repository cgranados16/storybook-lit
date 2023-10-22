import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Atoms/Typography",
  // component: "bp-filled-button",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return html`<h1 class="display">Blog Post</h1>
      <h2 class="headline">The first headline</h2>
      <p class="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vitae gravida purus, aliquet efficitur sem. In at tristique neque, nec
        sagittis nibh. Vivamus cursus quam ut urna tincidunt fermentum id quis
        arcu. Nullam in malesuada odio. Quisque sed elementum magna, in eleifend
        ante. Integer molestie pretium ligula quis congue. Etiam sed
        sollicitudin enim. Phasellus a iaculis arcu. Morbi aliquam feugiat ipsum
        sed accumsan.
      </p>
      <p class="body">
        Ut sollicitudin urna lacus, in auctor dolor maximus vel. Sed non
        ultricies nisl, at luctus ex. Duis congue justo eget mauris tristique
        tempor. Fusce facilisis imperdiet augue non dictum. Ut molestie nisi sit
        amet ex placerat, consectetur porttitor est lobortis. Donec eget eros et
        nibh consequat tempor. Sed odio lectus, accumsan in cursus eu, egestas
        eu odio. Pellentesque non dictum massa. Nullam non lacus vitae augue
        bibendum blandit. Mauris scelerisque mi tellus, sit amet egestas lorem
        porttitor id. Proin pharetra ligula et lobortis volutpat. In eget lectus
        eu felis iaculis varius. Pellentesque vulputate cursus lacus sit amet
        maximus.
      </p>`;
  },
};

/** As the largest text on the screen, display styles are reserved for short, important text or numerals. They work best on large screens. */
export const Display: Story = {
  render() {
    return html`<h1 class="display">Display Large - Lato 57/64 -0.25</h1>`;
  },
};

/** Headlines are best-suited for short, high-emphasis text on smaller screens. These styles can be good for marking primary passages of text or important regions of content.

Headlines can also make use of expressive typefaces, provided that appropriate line height and letter spacing is also integrated to maintain readability. */
export const Headline: Story = {
  render() {
    return html`<h2 class="headline">Headline Large - Lato 32/40 . 0</h2>`;
  },
};

/** Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, consider using title styles to divide secondary passages of text or secondary regions of content.

For titles, use caution when using expressive fonts, including display, handwritten, and script styles. */
export const Title: Story = {
  render() {
    return html`<h1 class="bp-title">Title Large - Lato Regular 22/28 . 0</h1>
      <h2 class="bp-title is-medium">
        Title Medium - Lato Medium 16/24 . +0.15
      </h2>
      <h3 class="bp-title is-small">
        Title Small - Lato Medium 14/20 . +0.1
      </h3>`;
  },
};

/** Label styles are smaller, utilitarian styles, used for things like the text inside components or for very small text in the content body, such as captions. 

Buttons, for example, use the label large style. */
export const Label: Story = {
  render() {
    return html`<h1 class="label">Label Large - Lato Medium 14/20 . +0.1</h1>
      <h2 class="label is-medium">Label Medium - Lato Medium 12/16 . +0.5</h2>
      <h3 class="label is-small">Label Small - Lato Medium 11/16 . +0.5</h3>`;
  },
};

/** Body styles are used for longer passages of text in your app. 

Use typefaces intended for body styles, which are readable at smaller sizes and can be comfortably read in longer passages.

Avoid expressive or decorative fonts for body text because these can be harder to read at small sizes. */
export const Body: Story = {
  render() {
    return html`<p class="body">Body Large - Lato 16/24 . +0.5</p>
      <p class="body is-medium">Body Medium - Lato 14/20 . +0.25</p>
      <p class="body is-small">Body Small - Lato 12/16 . +0.4</p>`;
  },
};
