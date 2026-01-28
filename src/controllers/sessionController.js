
import jwt from 'jsonwebtoken';
import UserDTO from '../dto/UserDTO.js';
import { requestPasswordReset, resetPassword } from '../services/passwordRecovery.service.js';

export const login = async (req, res) => {
  const token = jwt.sign(
    { id: req.user._id, role: req.user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.json({ token });
};

export const current = async (req, res) => {
  res.json(new UserDTO(req.user));
};

export const forgotPassword = async (req, res) => {
  await requestPasswordReset(req.body.email);
  res.json({ message: 'Mail enviado' });
};

export const changePassword = async (req, res) => {
  await resetPassword(req.params.token, req.body.password);
  res.json({ message: 'Contraseña actualizada' });
};
