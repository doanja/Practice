type TodoItems = {
  id: string;
  text: string;
  completed: boolean;
};

type ToggleTodo = (selectedTodo: TodoItems) => void;

type AddTodo = (text: string) => void;

type DeleteTodo = (id: string) => void;
