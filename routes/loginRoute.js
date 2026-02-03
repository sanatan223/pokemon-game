const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
const loginRouter = express.Router();
const pool = require('../database/pool');

loginRouter.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
loginRouter.use(passport.session());
loginRouter.use(express.urlencoded({ extended: false }));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
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

module.exports = loginRouter;

