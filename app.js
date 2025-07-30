const express = require("express") //create express server
const userModel = require('./user.model'); //import user model to connect with MongoDB

const app = express(); //create a server with express app

app.listen(3000, () => {    //listen on port 3000
    console.log("Server is running on port 3000...");
}); //start the server

//create a simple / api route
app.get("/", async (req, res) => { 
     await userModel.create({ //create a new user in the database
        username: "usertest1",
        email: "usertest1@gmail.com",
        age: 25
     });
        res.send("User created!"); //send a response
});

app.get("/health", (req, res) => { //create another api route for health check
    res.send("Server is healthy!"); //send a response 
});
