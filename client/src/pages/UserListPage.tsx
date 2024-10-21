import { AddUserForm } from "@client/components/AddUserForm";
import { UserList } from "@client/components";
import { User } from "@library/types";

export function UserListPage() {
  const data: User[] = [
    {
      id: "1",
      name: "Alice",
      todos: [
        {
          id: "1",
          title: "Buy groceries",
          completed: false,
          requiredBefore: [],
        },
        { id: "2", title: "Walk the dog", completed: true, requiredBefore: [] },
      ],
    },
    {
      id: "2",
      name: "Bob",
      todos: [
        {
          id: "3",
          title: "Wash the car",
          completed: false,
          requiredBefore: [],
        },
        { id: "4", title: "Mow the lawn", completed: true, requiredBefore: [] },
      ],
    },
  ];

  return (
    <div>
      <h1>Users</h1>
      <p>Here is a list of users:</p>
      <AddUserForm />
      <UserList data={data} />
    </div>
  );
}
