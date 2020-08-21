type Todo = {
  _id: string;
  text: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type GetTodos = (cb: any) => void;

type DeleteTodo = (id: string) => void;

type ToggleTodo = (id: string, done: boolean) => void;

type AddTodo = (text: string) => void;

type ToggleModal = (errorText?: string) => void;

type SignupFormValues = {
  email: string;
  email_2: string;
  password: string;
  password_2: string;
};

type LoginFormValues = {
  email: string;
  password: string;
};
