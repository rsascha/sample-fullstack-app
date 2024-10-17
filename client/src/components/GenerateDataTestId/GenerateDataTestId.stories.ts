import type { Meta, StoryObj } from "@storybook/react";
import { GenerateDataTestId } from "./GenerateDataTestId";

const meta: Meta<typeof GenerateDataTestId> = {
  component: GenerateDataTestId,
};

export default meta;
type Story = StoryObj<typeof GenerateDataTestId>;

export const Primary: Story = {
  args: {},
};
