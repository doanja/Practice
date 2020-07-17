import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
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
    maxlength: 32,
    required: true,
  },
});

export default mongoose.model<IUser>('User', UserSchema);
