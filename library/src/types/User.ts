import { Todo } from "./Todo";

export type User = {
  id: string;
  name: string;
  todos: Todo[];
};
