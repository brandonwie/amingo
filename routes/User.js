const express = require('express');
const User = require('../models/User');

const router = express.Router();

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

module.exports = router;