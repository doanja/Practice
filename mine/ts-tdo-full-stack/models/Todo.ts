import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  text: string;
  done: boolean;
}

const TodoSchema: Schema = new Schema({
  text: { type: String, trim: true, required: true },
  done: { type: Boolean, default: false },
});

export default mongoose.model<ITodo>('Todo', TodoSchema);
