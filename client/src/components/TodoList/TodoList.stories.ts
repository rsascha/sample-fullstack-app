import { Todo } from "@library/types";
import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "./TodoList";

const meta: Meta<typeof TodoList> = {
  component: TodoList,
};

export default meta;
type Story = StoryObj<typeof TodoList>;

const data: Todo[] = [
  {
    id: "1",
    title: "First todo",
    description: "Description of first todo",
    completed: false,
    requiredBefore: [],
  },
  {
    id: "2",
    title: "Second todo",
    description: "Description of second todo",
    completed: false,
    requiredBefore: [
      {
        id: "1",
        title: "First todo",
        description: "Description of first todo",
        completed: false,
        requiredBefore: [],
      },
    ],
  },
];

export const Primary: Story = {
  args: { data },
};
