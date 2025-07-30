const express = require("express") //create express server
require('./user.model'); //import user model to connect with MongoDB

const app = express(); //create a server with express app

app.listen(3000, () => {    //listen on port 3000
    console.log("Server is running on port 3000...");
}); //start the server

app.get("/", (req, res) => { //create a route for the server its an api
    res.send("Hello, World!"); //send a response
}); //send a response to the client

app.get("/health", (req, res) => { //create another api route for health check
    res.send("Server is healthy!"); //send a response 
}); //send a response to the client
