import type { Meta, StoryObj } from "@storybook/react";
import { UserList } from "./UserList";
import { User } from "@library/types";

const meta: Meta<typeof UserList> = {
  component: UserList,
};

export default meta;
type Story = StoryObj<typeof UserList>;

const data: User[] = [
  {
    id: "1",
    name: "Alice",
    todos: [],
  },
  {
    id: "2",
    name: "Bob",
    todos: [],
  },
];

export const Primary: Story = {
  args: { data },
};
