import express from 'express';
import dotenv from 'dotenv';
import dbconnect from './config/dbconnect.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
const PORT =process.env.PORT||6000
dbconnect();
const app =express();

app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})