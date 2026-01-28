
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import dotenv from 'dotenv';
import { initializePassport } from './config/passport.config.js';

import sessionRoutes from './routes/sessionRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

initializePassport();
app.use(passport.initialize());

mongoose.connect(process.env.MONGO_URI);

app.use('/api/sessions', sessionRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

app.listen(process.env.PORT, () =>
  console.log('Servidor arriba en puerto', process.env.PORT)
);
