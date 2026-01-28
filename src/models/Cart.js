
import mongoose from 'mongoose';

export default mongoose.model('Carts', new mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
      quantity: Number
    }
  ]
}));
