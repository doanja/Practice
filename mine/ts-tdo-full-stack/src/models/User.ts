import { Schema, model } from 'mongoose';
import { IUser } from '../types/user';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

export default model<IUser>('User', UserSchema);
