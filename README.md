# Create-Anything-with-Chatgpt-Ai

Creating some user friendly apps using Chatgpt Ai.

Server : Express.js
Database : MongoDB
Tool : MongoDB Compass (GUI)
package : Mongoose (To connect the express.js server with the MongoDB database.)

1.First of all we Create a folder named Create Anything with Ai and this folder is monitored with Git.

2.Create app.js file inside the Create Anything with Ai folder.

3.Now install express.js server in your system.
  d/My Ai Apps (main)$ npm i express

Output :
        added 67 packages in 3s

       14 packages are looking for funding
       run `npm fund` for details

4.Before installing express.js check weather the node.js is installed or not otherwise the  
  express.js will won't work untill you install the node.js?
  
  d/My Ai Apps (main)$ npm --version
  
  Output :
          10.9.2

5.Now express.js server is successfully installed.

6.Now create the express.js server in app.js file and then start with below commands and create  
  minimum two endpoints nothing but two api's.

    ```app.js

        const express = require("express") //create express server

        const app = express(); //create a server with express app

        app.listen(3000, () => {    //listen on port 3000
            console.log("Server is running on port 3000...");
        }); //start the server

        app.get("/", (req, res) => { //create a route for the server its an api
            res.send("Hello, World!"); //send a response
        }); //send a response to the client

        output : Hello, World! ( To see the output Open chrome browser url : localhost:3000)
                      

        app.get("/health", (req, res) => { //create another api route for health check
            res.send("Server is healthy!"); //send a response 
        }); //send a response to the client

        output : Server is healthy! (To see the output Open chrome browser url : localhost:3000/health)

    ```
7. Now we will install MongoDB (Community Edition) and then will use MongoDB database to store  
   user details creted by the express.js server.

   We will also install Compass tool which work with MongoDB data in a GUI.
   url : mongodb.com/try/download/compass

8.To connect server with the Database and to perform any operation in DB we need to install a  
  package called mongoose.

  Output:
  /d/My Ai Apps/Create-Anything-with-Chatgpt-Ai (main)$ npm i mongoose

      added 17 packages, and audited 85 packages in 5s

       15 packages are looking for funding
       run `npm fund` for details.

9.Create a file user.model.js to connect server with the database.

    ```user.model.js
        const mongoose = require('mongoose'); //import mongoose to connect with MongoDB

        mongoose.connect('mongodb://0.0.0.0/create-anything-with-ai') //connect to MongoDB
            .then(() =>{
        console.log('MongoDB connected successfully'); //log success message
    })
    ```
10.Now import (or) add user model in app.js file to connect with MongoDB

    require('./user.model'); //import user model to connect with MongoDB

11.Finally check the server and db running are not?

    /d/My Ai Apps/Create-Anything-with-Chatgpt-Ai (main)$ node app.js

  Output:
      Server is running on port 3000...
      MongoDB connected successfully

11.To perform CRUD operations in the database first we need to create the Schema.
