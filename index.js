/// Creating a server--
// for installing the server we have to type-- npm install express
const express = require("express") // here we importing the express


const data = express() // calling the server

// Creating the Home route
data.get('/',function(req,res){
    res.send("This is the normal text called string")

})


// creating the  rout3---
data.get('/home/main',function(req,res){
    res.send("<h1>Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</h1>")
})

data.listen(4001,()=>{
        console.log("Applicatio is started")
    })
