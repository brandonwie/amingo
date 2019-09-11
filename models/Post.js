/** Create a new model models/Post.js
// Post.js fields
*   String: message
*   String: email
*   Date: date created
* Create a new route file routes/Post.js
* Create a new route to save Post data in database
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('post', PostSchema);