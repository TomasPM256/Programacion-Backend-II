
import mongoose from 'mongoose';

export default mongoose.model('Products', new mongoose.Schema({
  title: String,
  price: Number,
  stock: Number
}));
