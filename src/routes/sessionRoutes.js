import { Router } from 'express';
import { login, current } from '../controllers/sessionController.js';
import passport from 'passport';
import '../config/passport.js';

const router = Router();

router.post('/login', login);
router.get('/current', passport.authenticate('jwt', { session: false }), current);

export default router;