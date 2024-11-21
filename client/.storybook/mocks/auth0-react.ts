import { fn, Mock } from "@storybook/test";

interface Auth0Context {
  loginWithRedirect: Mock;
  logout: Mock;
  user: unknown;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const useAuth0: () => Auth0Context = fn().mockImplementation(() => ({
  loginWithRedirect: fn().mockName("loginWithRedirect"),
  logout: fn().mockName("logout"),
  user: null,
  isAuthenticated: false,
  isLoading: false,
}));

export { useAuth0 };
