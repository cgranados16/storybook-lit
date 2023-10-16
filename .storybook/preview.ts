import type { Preview } from "@storybook/web-components";
import "../src/styles/index.scss";
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
