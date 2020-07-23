import { Request, Response } from 'express';
import { ITodo } from '../types';
import { Todo } from '../models';

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  // Todo.find({ user: req.token?._id })
  //   .then(todos => res.status(200).json(todos))
  //   .catch(err => res.status(422).json(err));

  try {
    const todos: ITodo[] = await Todo.find({ user: req.token?._id });

    res.status(200).json({ todos });
  } catch (error) {
    res.status(422).json(error);
  }
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  // const newTodo = { text: req.body.text, done: false, user: req.token?._id };

  // Todo.create(newTodo)
  //   .then(todos => res.status(200).json(todos))
  //   .catch(err => res.status(422).json(err));

  try {
    const todo: ITodo = new Todo({
      text: req.body.text,
      done: false,
      user: req.token?._id,
    });

    const newTodo: ITodo = await todo.save();

    const allTodos: ITodo[] = await Todo.find();

    res.status(201).json({ message: 'Todo added', todo: newTodo, todos: allTodos });
  } catch (error) {
    res.status(422).json(error);
  }
};

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  // Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  //   .then(todos => res.status(200).json(todos))
  //   .catch(err => res.status(422).json(err));

  try {
    const updateTodo: ITodo | null = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

    const allTodos: ITodo[] = await Todo.find();

    res.status(200).json({
      message: 'Todo updated',
      todo: updateTodo,
      todos: allTodos,
    });
  } catch (error) {
    res.status(422).json(error);
  }
};

export const deleteTodo = (req: Request, res: Response) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(todos => res.status(200).json(todos))
    .catch(err => res.status(422).json(err));
};
