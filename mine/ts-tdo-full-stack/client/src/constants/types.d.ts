type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type DeleteTodo = (id: string) => void;

type ToggleTodo = (id: string) => void;

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
