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
      {todos?.length > 0 ? (
        todos?.map((todo: TodoItem) => (
          <ListGroup.Item key={todo.id}>
            <Todo
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          </ListGroup.Item>
        ))
      ) : (
        <h2
          style={{ textAlign: "center", marginTop: "50px", color: "lightgray" }}
        >
          All Tasks Done!
        </h2>
      )}
    </ListGroup>
  );
}
