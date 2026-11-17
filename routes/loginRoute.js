import passport from 'passport';
import LocalStrategy from 'passport-local';
import express from 'express';
import { pool } from '../database/pool.js';
import { getUserByName, comparePassword } from '../database/query.js';

const loginRouter = express.Router();

loginRouter.use(express.urlencoded({ extended: false }));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await getUserByName(username);
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      const isPassword = await comparePassword(username, password);
      if (!isPassword) {
        return done(null, false, { message: "Incorrect password by match" })
      }
      
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];

    done(null, user);
  } catch(err) {
    done(err);
  }
});

loginRouter.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) {
      return next(err);
    }
    if(!user) {
      return res.status(401).json({
        success: false,
        message: info.message
      });
    }
    req.logIn(user, (err) => {
      if(err) {
        return next(err);
      }
      return res.status(200).json({
        success: true,
        message: "logged in successfully",
        user: { id: user.id, username: user.username }
      });
    });
  })(req, res, next);
})

export { loginRouter };
