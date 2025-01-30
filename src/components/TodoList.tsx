import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";
import { TodoItem } from "../types";

type TodoListProps = {
  todos: TodoItem[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export default function TodoList({
  todos,
  toggleComplete,
  deleteTodo,
}: TodoListProps) {
  console.log({ todos });

  return (
    <ListGroup>
      {todos.map((todo: TodoItem) => (
        <ListGroup.Item key={todo.id}>
          <Todo
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
