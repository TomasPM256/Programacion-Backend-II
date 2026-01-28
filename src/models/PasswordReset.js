
import mongoose from 'mongoose';

export default mongoose.model('PasswordResets', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  token: String,
  expiresAt: Date
}));
