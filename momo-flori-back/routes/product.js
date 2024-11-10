const { Router } = require("express");
const Produto = require('../models/product');
const router = Router();

const {getProducts, postProduct} = require("../controllers/product")

router.get('/', getProducts);

router.post('/', postProduct)

module.exports = router;