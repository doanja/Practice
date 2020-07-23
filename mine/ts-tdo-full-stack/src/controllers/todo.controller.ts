import { Request, Response } from 'express';
import db from '../models';

export const getTodos = (req: Request, res: Response) => {
  db.Todo.find({ user: req.token?._id })
    .then(todos => res.status(200).json(todos))
    .catch(err => res.status(422).json(err));
};

export const addTodo = (req: Request, res: Response) => {
  const newTodo = { text: req.body.text, done: false, user: req.token?._id };

  db.Todo.create(newTodo)
    .then(todos => res.status(200).json(todos))
    .catch(err => res.status(422).json(err));
};

export const updateTodo = (req: Request, res: Response) => {
  db.Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(todos => res.status(200).json(todos))
    .catch(err => res.status(422).json(err));
};

export const deleteTodo = (req: Request, res: Response) => {
  db.Todo.deleteOne({ _id: req.params.id })
    .then(todos => res.status(200).json(todos))
    .catch(err => res.status(422).json(err));
};
