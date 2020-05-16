type TodoItems = {
  text: string;
  completed: boolean;
};

type ToggleTodo = (selectedTodo: TodoItems) => void;

type AddTodo = (text: string) => void;
