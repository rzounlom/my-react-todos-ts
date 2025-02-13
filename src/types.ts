export type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
};

export type NewTodoItem = Omit<TodoItem, "id">;
