const express = require('express');
const router = express.Router();
const db = require('../models');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next()
});


// Create a new user
router.post('/addUser', (req, res)=>{

    db.User
        .create(req.body)
        .then(user=>{
            console.log(`Created user ${user._id}, name: ${user.name}`);
            res.status(200).send({userId: user._id})
        })
        .catch(err => res.json(err))
});

// update a user
router.post('/editUser/:id', (req, res)=>{


    db.User
        .findOneAndUpdate({_id: req.params.id})
        .then(user=>{
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

// Create a new user
router.post('/deleteUser/:id', (req, res)=>{


    db.User
        .findOneAndDelete({_id: req.params.id})
        .then(user=>{
            console.log(`Created user ${user._id}, name: ${user.name}`);
            res.status(200).send({userId: user._id})
        })
        .catch(err => res.json(err))
});

module.exports = router;