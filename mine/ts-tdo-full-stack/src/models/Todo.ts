import { Schema, model } from 'mongoose';
import { ITodo } from '../types/todo';

const TodoSchema: Schema = new Schema({
  text: { type: String, trim: true, required: true },
  done: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, required: true },
});

export default model<ITodo>('Todo', TodoSchema);
