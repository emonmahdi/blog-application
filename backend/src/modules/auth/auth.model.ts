import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name?: string;
  email: string;
  password?: string;
  role: 'reader' | 'author' | 'admin';
  refreshToken?: string | null; // store single refresh token (simple)
}

const UserSchema = new Schema<IUser>({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  role: { type: String, enum: ['reader','author','admin'], default: 'reader' },
  refreshToken: { type: String, default: null }
}, { timestamps: true });

export default model<IUser>('User', UserSchema);
