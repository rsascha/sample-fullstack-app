import { Todo } from "@library/types";
import styles from "./TodoList.module.css";
import { DisplayChildren } from "../DisplayChildren";

type TodoListProps = {
  data: Todo[];
};

export function TodoList({ data }: TodoListProps) {
  return (
    <ul className={styles.wrapper}>
      {data.map(({ id, title, description, completed, requiredBefore }) => (
        <li key={id}>
          <p>{title}</p>
          <p>{description}</p>
          <p>{completed ? "Completed" : "Not completed"}</p>
          <DisplayChildren condition={requiredBefore.length > 0}>
            <p>Must be completed before:</p>
            <TodoList data={requiredBefore} />
          </DisplayChildren>
        </li>
      ))}
    </ul>
  );
}
