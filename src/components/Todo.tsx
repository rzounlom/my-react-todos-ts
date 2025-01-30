import "./Todo.css";

import { Button } from "react-bootstrap";
import type { TodoItem } from "../types";

type TodoProps = {
  todo: TodoItem;
};

export default function Todo({ todo }: TodoProps) {
  return (
    <div className="todo">
      <p className={todo?.completed ? "todo-title-completed " : ""}>
        {todo?.title}
      </p>
      <div className="btn-group">
        <Button variant="outline-primary">
          {todo?.completed ? "Undo" : "Complete"}
        </Button>
        <Button variant="outline-danger">Delete</Button>
      </div>
    </div>
  );
}
