import express from 'express';
const router = express.Router();
import todoController from '../../controllers/todo.controller';

//  matches '/api/todos
router.route('/').get(todoController.findAll).post(todoController.create);

// matches '/api/todos/:id'
router.route('/:id').put(todoController.update).delete(todoController.delete);

export default router;
