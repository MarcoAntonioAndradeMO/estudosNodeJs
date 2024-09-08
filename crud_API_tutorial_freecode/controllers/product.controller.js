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

module.exports = {
    getProducts,
    getProduct,
}