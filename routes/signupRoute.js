const express = require('express');
const { getAllUsers } = require('../database/query');
const signupRouter = express.Router();
const { insertUser } = require('../database/query');
const { body, validationResult } = require('express-validator');

signupRouter.post('/', [
    body('username')
    .trim()
    .isLength({ min: 3, max: 20 }).withMessage('Username must be 3-20 characters long')
    .isAlphanumeric().withMessage('Username must be alphanumeric')
    .escape(),

    body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/\d/).withMessage('Password must contain a number')
    .not().toLowerCase().withMessage('Password should not be all lowercase (optional)'),

], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const users = await getAllUsers();
    const existingUser = users.find(user => user.username === username);
    if(existingUser){
        return res.status(401).send("user already exists");
    }
    await insertUser(username, password);
    res.status(200).send("user created");
})

module.exports = signupRouter;
