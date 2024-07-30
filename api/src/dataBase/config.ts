import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.DB_CNN}`);
    console.log('DB online');
  } catch (error) {
    console.log(error);
    throw new Error('Error to connect with the data base');
  }
};
