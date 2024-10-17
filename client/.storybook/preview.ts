import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import "@client/index.css";

initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // loaders: [mswLoader, () => getWorker().start()],
  loaders: [mswLoader],
};

export default preview;
