import { Schema, model } from 'mongoose';

interface Iuser {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

const userSchema = new Schema<Iuser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minLenght: 3,
  },

  avatar: String,
});

export const User = model<Iuser>('User', userSchema);
