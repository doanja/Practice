import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  password: string;
  // comparePassword(inputPassword: string): Promise<boolean>;
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
});

// UserSchema.methods.comparePassword = function (inputPassword: string): Promise<boolean> {
//   let password = this.password;
//   return new Promise((resolve, reject) => {
//     bcrypt.compare(inputPassword, password, (err, success) => {
//       if (err) return reject(err);
//       return resolve(success);
//     });
//   });
// };

export default mongoose.model<IUser>('User', UserSchema);
