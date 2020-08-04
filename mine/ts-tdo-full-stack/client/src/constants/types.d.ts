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
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

type LoginFormValues = {
  email: string;
  password: string;
};
