type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type DeleteTodo = (id: string) => void;
