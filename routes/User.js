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

/**
 * DELETE route to remove a user from collection
 * @name DELETE
 * 
*/ 
router.delete('/delete', (req, res) => {
    User.deleteMany(function(err, result) {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });

module.exports = router;