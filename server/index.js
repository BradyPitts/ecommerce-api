const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const products = require('../products.json');
const app = express();
const port = 3995;


app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);


app.get('/api/products', (req,res) =>{
  res.status(200).send(products)
})



app.listen(port, () =>{
  console.log(`app running on ${port}`)
})