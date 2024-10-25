import type { Meta, StoryObj } from "@storybook/react";
import { ErrorDisplay } from "./ErrorDisplay";
// import { vi } from "vitest";

// vi.mock("@client/assets/drawing-pencil-svgrepo-com.svg", () => <div>Test</div>);

const meta: Meta<typeof ErrorDisplay> = {
  component: ErrorDisplay,
};

export default meta;
type Story = StoryObj<typeof ErrorDisplay>;

export const Primary: Story = {
  args: {
    error: new Error("An error occurred."),
  },
};

export const StringError: Story = {
  args: {
    error: "An error occurred.",
  },
};
