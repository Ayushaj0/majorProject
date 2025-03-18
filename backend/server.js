import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import issuesRouter from './routes/issues.js'; // Assuming this is where the routes are stored

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


// Use Routes
app.use('/api/issues', issuesRouter); // Adds the issues route

// Start the Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
