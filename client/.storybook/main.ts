import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

// console.debug(path.resolve(__dirname, "..", "src/wrapper/auth0-react.mock.ts"));

// process.exit(1);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        "@auth0/auth0-react": path.resolve(
          __dirname,
          "..",
          "src/wrapper/auth0-react.mock.ts"
        ),
      };
    }

    return config;
  },
};
export default config;
