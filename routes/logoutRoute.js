const express = require('express');
const logoutRouter = express.Router();

logoutRouter.post('/', (req, res) => {
  req.logout((err) => {
    if (err) {
      res.status(401).json({ prompt: "problem while logout" });
    }
    res.status(200).json({ prompt: "good bye user" });
  });
});

module.exports = logoutRouter;