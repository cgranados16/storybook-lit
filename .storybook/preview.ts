import type { Preview } from "@storybook/web-components";
import "@fontsource/lato";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "../src/styles/sl-styles.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath("/");
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
