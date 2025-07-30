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

11.Before performing any CRUD operations in the database first we need to create the Schema  
   and then the user model.

    ```user.model.js
         //Schema mainly used to define the structure of the user data
             const userSchema = new mongoose.Schema({
                    username: String,
                    email: String,
                    age: Number
                });

        //create user model : used to create a model for the user schema to do CRUD operations
             const userModel = mongoose.model('User', userSchema);  

        //export user model : used to export the user model for use in other files  
             module.exports = userModel;

    ```
12.In app.js file we will be adding a userModel variable and creating an api endpoint for 
    the user as shown in line 2 and line 11 to 18.

    ```app.js

        const express = require("express")//create express server 
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

    ```
13.Finally executing the below commmand to reflect the changes made i.e database creation and user details were created successfully.

/d/My Ai Apps/Create-Anything-with-Chatgpt-Ai (main)$ node app.js

Output :
        Server is running on port 3000...
        MongoDB connected successfully

KEY NOTE :

- Once we execute the node app.js command the database gets created in the database.
- But the user details will get reflect into the database once we execute/hit the api route  
  in the browser : [api route](./Screenshots/Pic3-%20api%20route%20(User%20Details).png) until that the user data won't be reflected into the database.

14.Now to perform the CURD operations in the MongoDB database :
     - We need to create api's on the server side and  
     - To test the api's created we need to use a POSTMAN tool.  
