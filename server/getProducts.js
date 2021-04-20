const products = require('../products.json')

const getProduct = (req,res) =>{
  if(req.query.price){
    const items = products.filter((val) => val.price >= parseInt(req.query.price))
    return res.status(200).send(items)
  }
  res.status(200).send(products)
}

module.export = getProduct