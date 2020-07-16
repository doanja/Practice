import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export interface ITodo extends Document {
  text: string;
  done: boolean;
  user: IUser['_id'];
}

const TodoSchema: Schema = new Schema({
  text: { type: String, trim: true, required: true },
  done: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<ITodo>('Todo', TodoSchema);
