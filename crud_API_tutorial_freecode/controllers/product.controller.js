const Product = require("../models/product.model.js");

//Listar todos os Produtos (Read)
const getProducts =  async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Selecionar Produto (Read Only)
// Falta selecionar o ID
const getProduct =  async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Adicionar produtos (Create)
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Update
const updateProduct = async (req, res) => {
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
};

//Delete API
const deleteProduct =  async (req, res) => {
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
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}