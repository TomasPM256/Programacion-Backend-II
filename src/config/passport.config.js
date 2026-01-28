
import passport from 'passport';
import jwt from 'passport-jwt';
import local from 'passport-local';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const LocalStrategy = local.Strategy;

export const initializePassport = () => {
  passport.use('login', new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) return done(null, false);
      if (!bcrypt.compareSync(password, user.password)) return done(null, false);
      return done(null, user);
    }
  ));

  passport.use('jwt', new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    },
    async (payload, done) => {
      const user = await User.findById(payload.id);
      return done(null, user || false);
    }
  ));
};
