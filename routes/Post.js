const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

/**
 * POST route for register a new user
 * 
 * @name POST /post
 * 
 * 
 * @param {string} message - message of the user
 * @param {string} email - email of the user
 */

router.post('/', (req, res) => {
    User
        .find({email: req.body.email})
        .then(user => {
            if(user) {
                console.log("user->", user);
                const newPost = new Post({
                message: req.body.message,
                email: req.body.email,
                userId: user._id
            });
    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.json(err))
        } else {
            res.json({message: "User in not found"});
        }
        })
        .catch(err => res.json({message: err}))
});

/**
 * GET route to fetch all users from collection
 * @name GET /users/
 * 
 */
router.get('/', (req, res) => {
    Post
    // Fetch data by category
    // .find({email: req.body.email}) : email will appear on web address
        .find({email: req.query.email})
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

/**
 * DELETE route to remove a user from collection
 * @name DELETE
 * 
*/ 
router.delete('/removePost', (req, res) => {
    Post.deleteMany(function(err, result) {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });

module.exports = router;