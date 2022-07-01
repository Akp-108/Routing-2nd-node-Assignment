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
    res.send("<h1>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications</h1>")
})

data.listen(4001,()=>{
        console.log("Applicatio is started")
    })