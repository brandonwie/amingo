const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const keys = require('./config/keys');
// Connect MongoDB (inclueds ID and PW)

console.log('keys.mongoURI->>', keys.mongoURI);
const db = keys.mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

const app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));

// User routes
const userRoutes = require('./routes/User');
app.use('/users', userRoutes);

// PRACTICE PART
const postRoutes = require('./routes/Post');
app.use('/posts', postRoutes);

// Homepage
// '/' means a homepage
app.get('/', (req, res) => res.json(
    {
    msg: 'Hello amingo!!'
    }
));

// About
app.get('/about', (req, res) => res.json(
    {
    msg: 'This is the about page.'
    }
));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`You application is running @ http://localhost:${port}`));