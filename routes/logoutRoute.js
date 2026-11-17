import express from 'express';
const logoutRouter = express.Router();

logoutRouter.use(express.urlencoded({ extended: false }));

logoutRouter.post('/', (req, res) => {
  req.logout((err) => {
    if (err) {
      res.status(401).json({ prompt: "problem while logout" });
    }
    res.status(200).json({ prompt: "good bye user" });
  });
});

export { logoutRouter };