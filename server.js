const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
// Connect MongoDB (inclueds ID and PW)
const db = "mongodb+srv://brandonwie:Marianka3@cluster0-biupg.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose
    .connect(db, {})
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