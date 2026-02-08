const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user.username });
  } else {
    res.status(401).json({ user: null });
  }
});

module.exports = authRouter;