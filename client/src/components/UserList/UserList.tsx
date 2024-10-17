import { User } from "@library/types";
import { TodoList } from "../TodoList";

export type UserListProps = {
  data: User[];
};

export function UserList({ data }: UserListProps) {
  console.debug("UserList", data);

  return (
    <div>
      {data.map(({ id, name, todos }) => (
        <div key={id}>
          <p>{name}</p>
          <TodoList data={todos} />
        </div>
      ))}
    </div>
  );
}
