require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Produto = require('./models/product');
const routeProduct = require("./routes/product"); 
const app = express();

// Conectando no MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error("Erro ao conectar ao MongoDB", err));

app.use(cors());
app.use(express.json());

app.use('/products', routeProduct);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
