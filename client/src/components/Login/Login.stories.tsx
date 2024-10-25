import { useAuth0 } from "@auth0/auth0-react";
import type { Meta, StoryObj } from "@storybook/react";
import { Mock } from "@storybook/test";
import { Login } from "./Login";

const meta: Meta<typeof Login> = {
  component: Login,
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Primary: Story = {
  async beforeEach() {
    (useAuth0 as Mock).mockReturnValue({
      ...useAuth0,
      isLoading: false,
    });
  },
  args: {},
};

export const Loading: Story = {
  async beforeEach() {
    (useAuth0 as Mock).mockReturnValue({
      ...useAuth0,
      isLoading: true,
    });
  },
  args: {},
};
