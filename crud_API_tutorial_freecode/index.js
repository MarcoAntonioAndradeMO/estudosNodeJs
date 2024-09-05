const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
     res.send("Hello from node API Server");
});

mongoose.connect("mongodb+srv://marcoantonioandrade05:32663112Ma@crudapitutorial.llwze.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CRUDAPITUTORIAL")
.then(() => {
    console.log("Connected to database!")
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("connection failed!")
})