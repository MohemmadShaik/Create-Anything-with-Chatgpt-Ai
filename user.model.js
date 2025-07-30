const mongoose = require('mongoose'); //import mongoose to connect with MongoDB

mongoose.connect('mongodb://0.0.0.0/create-anything-with-ai') //connect to MongoDB database
    .then(() =>{
        console.log('MongoDB connected successfully'); //log success message
    })

    //define user schema : mainly used to define the structure of the user data
    const userSchema = new mongoose.Schema({
        username: String,
        email: String,
        age: Number 
    }); 

    
    const userModel = mongoose.model('User', userSchema); //create user model : to do CRUD operations

    module.exports = userModel; //export user model : used to export the user model for use in other files

