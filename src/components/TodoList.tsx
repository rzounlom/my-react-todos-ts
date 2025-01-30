import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";
import { TodoItem } from "../types";

type TodoListProps = {
  todos: TodoItem[];
};

export default function TodoList({ todos }: TodoListProps) {
  console.log({ todos });

  return (
    <ListGroup>
      {todos.map((todo: TodoItem) => (
        <ListGroup.Item key={todo.id}>
          <Todo todo={todo} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
