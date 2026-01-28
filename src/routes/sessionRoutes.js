
import { Router } from 'express';
import passport from 'passport';
import { login, current, forgotPassword, changePassword } from '../controllers/sessionController.js';

const router = Router();

router.post('/login', passport.authenticate('login', { session: false }), login);
router.get('/current', passport.authenticate('jwt', { session: false }), current);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', changePassword);

export default router;
