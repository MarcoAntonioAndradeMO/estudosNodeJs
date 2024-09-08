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

// Adicionar produtos (Create)
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.find(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Update
app.put('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.find(id, req.body);

        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//Delete API
app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: "Product not found"})
    
        }

        res.status(200).json({message: "Product deleted successfuly"})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

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