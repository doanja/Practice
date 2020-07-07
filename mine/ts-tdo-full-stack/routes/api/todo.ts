import { Router } from 'express';
import todoController from '../../controllers/todo.controller';

// class Todo {
//   public router = Router();

//   constructor() {
//     this.initializeRoutes();
//   }

//   public initializeRoutes() {
//     //  matches '/api/todos
//     this.router.route('/').get(todoController.findAll).post(todoController.create);

//     // matches '/api/todos/:id'
//     this.router.route('/:id').put(todoController.update).delete(todoController.delete);
//   }
// }

export default Todo;
