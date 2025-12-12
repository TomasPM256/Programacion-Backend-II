import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import sessionRoutes from './src/routes/sessionRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/api/sessions', sessionRoutes);

app.listen(process.env.PORT, () => console.log('Servidor arriba en puerto', process.env.PORT));
