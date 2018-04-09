const express = require('express');
const router = express.Router();
const db = require('../models/index');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next()
});


// Create a new user
router.post('/addUser', (req, res)=>{
    console.log('create user request body', req.body);
    db.User
        .create(req.body)
        .then(user=>{
            console.log(`Created user ${user._id}, name: ${user.name}`);
            res.status(200).send({userId: user._id})
        })
        .catch(err => res.json(err))
});

//get all users
router.get('/allUsers', (req, res)=>{
    db.User
    .find({})
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;