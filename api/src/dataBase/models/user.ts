import { Schema, model } from 'mongoose';

interface Iuser {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  roles: [];
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
  roles: [],
});

export const User = model<Iuser>('User', userSchema);
