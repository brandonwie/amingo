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
    const newPost = new Post({
        message: req.body.message,
        email: req.body.email
    })
    newPost
        .save()
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.json(err)
        })
});

/**
 * GET route to fetch all users from collection
 * @name GET /users/
 * 
 */
router.get('/', (req, res) => {
    Post.find()
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

module.exports = router;