const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  title: String,
  biotanicalName: String,
  color: String,
  image: String,
  subtitle: String,
  category: String,
  description: String,
  rating: Number,
  price: Number,
  isLiked: Boolean,
});

module.exports = mongoose.model('Product', produtoSchema, 'products');
