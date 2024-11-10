const Produto = require('../models/product');
const express = require('express');

function getAllProducts() {
    const produtos = Produto.find();
    return produtos;
}

function addProduct(req) {
    const novoProduto = new Produto(req.body);
    return novoProduto;
}

module.exports = { getAllProducts, addProduct }