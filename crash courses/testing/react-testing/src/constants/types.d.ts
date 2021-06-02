type Todo = {
  _id: string;
  text: string;
  isDone: boolean;
};

type GetTodos = (cb: any) => void;
type DeleteTodo = (id: string) => void;
type ToggleTodoIsDone = (id: string) => void;
type AddTodo = (todoText: string) => void;
