const express = require('express');
const router = express.Router();
const user = require('../models/UserModel')


router.post("/signup", async (req, res) => {
    try {
        const newuser = new user(req.body);
        const User = await newuser.save();
        res.send('User Created Successfully');
    } catch (error) {

        return res.status(400).json(error);
    }
});

router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
        if (user) {
            res.send(user)
        } else {
            return res.status(400).json({ message: 'Invalid Credientails' })
        }
    } catch (error) {
        return res.status(400).json(error);
    }
});

module.exports = router;