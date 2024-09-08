const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Routes
app.use("/api/products", productRoute);

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