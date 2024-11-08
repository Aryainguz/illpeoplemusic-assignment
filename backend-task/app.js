import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();


app.use(express.json());
app.use(cookieParser());


app.use('/api/v1', authRoutes);
app.use(cors({
  credentials: true, // Enable cookie sharing
}));
app.get('/', (req, res) => {
  res.send('API ready!');
}); 

// MongoDB connection
const mongo_uri = process.env.MONGO_URI 
connectDB(mongo_uri);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
