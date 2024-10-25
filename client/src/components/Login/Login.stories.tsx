import type { Meta, StoryObj } from "@storybook/react";
import { vi } from "vitest";
import { Login } from "./Login";
import { Auth0Provider } from "@auth0/auth0-react";

vi.mock("@auth0/auth0-react", () => ({
  Auth0Provider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  useAuth0: () => ({
    loginWithRedirect: () => {},
    logout: () => {},
    user: {},
    isAuthenticated: false,
    isLoading: false,
  }),
}));

const meta: Meta<typeof Login> = {
  component: Login,
  decorators: [
    (Story) => (
      <Auth0Provider>
        <Story />
      </Auth0Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Primary: Story = {
  args: {},
};
