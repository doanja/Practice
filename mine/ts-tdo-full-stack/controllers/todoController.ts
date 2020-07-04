import db from '../models';

// define methods for todoController
export default {
  findAll: (req: Request, res: Response) => {
    const todos = db.Todo.find((err: any, todos: any) => {
      if (err) {
        res.status(422).json(err);
      } else {
        res.json(todos);
      }
    });
  },
};
