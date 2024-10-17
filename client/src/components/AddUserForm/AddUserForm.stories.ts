import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { HttpResponse, HttpResponseInit, http } from "msw";
import { AddUserForm } from "./AddUserForm";

const meta: Meta<typeof AddUserForm> = {
  component: AddUserForm,
};

export default meta;
type Story = StoryObj<typeof AddUserForm>;

export const Primary: Story = {
  args: {},
};

const internalServerError = new HttpResponse(null, {
  status: 500,
  statusText: "Internal Server Error",
});

export const InternalServerError: Story = {
  parameters: {
    msw: {
      handlers: [http.post("/api/users", () => internalServerError)],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByTestId("name-sjehsi");
    const emailInput = canvas.getByTestId("email-3hiv9h");
    const submitButton = canvas.getByTestId("submit-jivw0s");
    await userEvent.type(nameInput, "Alice");
    await userEvent.type(emailInput, "alice@gmail.com");
    await userEvent.click(submitButton);
    function expectErrorState() {
      expect(canvas.getByTestId("error-c31l6")).toBeDefined();
    }
    await waitFor(expectErrorState);
  },
};

// https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
class FetchApiResponse extends HttpResponse {
  constructor(
    body?: BodyInit | null,
    init?: HttpResponseInit,
    public ok = true
  ) {
    super(body, init);
    // The ok read-only property of the Response interface contains
    // a Boolean stating whether the response was successful (status
    // in the range 200-299) or not.
    Object.defineProperty(this, "ok", { value: ok });
  }
}

const responseNotOk = new FetchApiResponse(null, undefined, false);

export const ResponseNotOk: Story = {
  parameters: {
    msw: {
      handlers: [http.post("/api/users", () => responseNotOk)],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByTestId("name-sjehsi");
    const emailInput = canvas.getByTestId("email-3hiv9h");
    const submitButton = canvas.getByTestId("submit-jivw0s");
    await userEvent.type(nameInput, "Alice");
    await userEvent.type(emailInput, "alice@gmail.com");
    await userEvent.click(submitButton);
    function expectErrorState() {
      expect(canvas.getByTestId("error-c31l6")).toBeDefined();
    }
    await waitFor(expectErrorState);
  },
};
