import mongoose from 'mongoose';

let isConnected = false; //track connection status

const env = process.env.NODE_ENV; //Check enviroment

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect('mongodb://localhost:27017', {
      dbName: 'promptopia',
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
