import type { Preview } from "@storybook/web-components";
import "@fontsource/lato";
import "../src/styles.scss";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";
setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
