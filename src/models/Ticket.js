
import mongoose from 'mongoose';

export default mongoose.model('Tickets', new mongoose.Schema({
  code: String,
  amount: Number,
  purchaser: String,
  createdAt: { type: Date, default: Date.now }
}));
