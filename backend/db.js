import mongoose from 'mongoose';

const mongoURI = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/motify';

const connectDB = () => {
  return mongoose.connect(mongoURI)
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err.message);
      process.exit(1);
    });
};

export default connectDB;
