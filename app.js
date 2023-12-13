// import needed modules 

import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db.js';
import userRoutes from './routes/user.route.js';
import core from 'cors';

dotenv.config();


// initialize app and port 
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(bodyParser.json());



app.use(cors());


// user routes 

app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
