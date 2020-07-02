type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type DeleteTodo = (id: string) => void;

type ToggleTodo = (id: string) => void;

type AddTodo = (text: string) => void;
