import mongoose, { Schema, Document } from 'mongoose';
// import { ITodo } from './Todo';

export interface IUser extends Document {
  email: string;
  password: string;
  //   todos: ITodo['_id'];
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    required: true,
  },
  password: {
    type: String,
    trim: true,
    minlength: 8,
    required: true,
  },
  todos: [{ type: Schema.Types.ObjectId }],
});

export default mongoose.model<IUser>('User', UserSchema);
