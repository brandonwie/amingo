const express = require('express');
const User = require('../models/User');

const router = express.Router();

/**
 * POST route for register a new user
 * 
 * @name POST /users/register
 * 
 * 
 * @param {string} email - email of the user
 * @param {string} password - password of the user
 * @param {string} occupation - occupation of the user
 * @param {name} name - name of the user
 */
router.post('/register', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        occupation: req.body.occupation
    })
        // Create user code goes here...
    // res.json({
    //     msg: 'User router called..'
    // })
    newUser
        .save()
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
});

/**
 * GET route to fetch all users from collection
 * @name GET: /users/
 * 
 */
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

// /**
//  * DELETE route to remove a user from collection
//  * @name DELETE
//  * 
// */ 
// router.delete('/', (req, res) => {
//     User.deleteOne(function(err, result) {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(result);
//       }
//     });
//   });

module.exports = router;