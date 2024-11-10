const { getAllProducts, addProduct } = require('../services/product')

async function getProducts(req, res) {
    try {
        const products = await getAllProducts();
        res.send(products);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

async function postProduct(req, res) {
    const newProduct  = await addProduct(req);
    try {
        const saveProduct = await newProduct.save();
        res.json(saveProduct);
    } catch {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getProducts, postProduct }
