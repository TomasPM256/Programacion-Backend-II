
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import PasswordReset from '../models/PasswordReset.js';
import User from '../models/User.js';
import { sendRecoveryMail } from './mail.service.js';

export const requestPasswordReset = async (email) => {
  const user = await User.findOne({ email });
  if (!user) return;

  const token = crypto.randomUUID();
  await PasswordReset.create({
    user: user._id,
    token,
    expiresAt: new Date(Date.now() + 3600000)
  });

  const link = `http://localhost:3000/reset-password/${token}`;
  await sendRecoveryMail(email, link);
};

export const resetPassword = async (token, newPassword) => {
  const record = await PasswordReset.findOne({ token });
  if (!record || record.expiresAt < new Date()) throw new Error();

  const user = await User.findById(record.user);
  if (bcrypt.compareSync(newPassword, user.password)) throw new Error();

  user.password = bcrypt.hashSync(newPassword, 10);
  await user.save();
  await record.deleteOne();
};
