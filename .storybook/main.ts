import type { StorybookConfig } from "@storybook/web-components-vite";
import turbosnap from "vite-plugin-turbosnap";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.optimizeDeps.include = [
      ...(config.optimizeDeps?.include ?? []),
      "@storybook/web-components",
    ];
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps?.exclude ?? []),
      "lit",
      "lit-html",
    ];
    return mergeConfig(config, {
      plugins:
        configType === "PRODUCTION"
          ? [
              turbosnap({
                // This should be the base path of your storybook.  In monorepos, you may only need process.cwd().
                rootDir: config.root ?? process.cwd(),
              }),
            ]
          : [],
    });
  },
};
export default config;
