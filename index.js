const express = require('express');
const bodyParser = require('body-parser')
const env = require('dotenv');
const mongoose  = require('mongoose');

const MovieRoutes = require('./routes/movie.routes.js');

env.config();
const app = express(); // express app object
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())

MovieRoutes(app); // invoking movie routes

app.get('/home',(req, res)=>{
    return res.json({
        success:true,
        error:false,
        message:"this is the home page"
    })
    
})
app.listen(port, async ()=>{
    // this callback gets executed , once we successfully start the server on the given port

    console.log(`Server Started on Port ${port}`);


    try {
        await mongoose.connect(process.env.DB_URL); // Mongodb Connection
        console.log("Successfully connected to Database");
    } catch (error) {
        console.log("Not able to connect Database",error);
        
    }
   

});