const mongoose = require('mongoose'); //import mongoose to connect with MongoDB

mongoose.connect('mongodb://0.0.0.0/create-anything-with-ai') //connect to MongoDB database
    .then(() =>{
        console.log('MongoDB connected successfully'); //log success message
    })