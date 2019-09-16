const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');

// Connect MongoDB (includes ID and PW)

// console.log('keys.mongoURI->>', keys.mongoURI);
const db = keys.mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

const app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Init passport
app.use(passport.initialize());
require('./config/passport')(passport);

// Auth routes
const authRoutes = require('./routes/Auth');
app.use('/auth', authRoutes);

// User routes
const userRoutes = require('./routes/User');
app.use('/users', passport.authenticate('jwt', {session: false}), userRoutes);

// Post routes
const postRoutes = require('./routes/Post');
app.use('/posts', passport.authenticate('jwt', {session: false}), postRoutes);

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