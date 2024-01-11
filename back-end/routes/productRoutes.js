const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')


//get all products
router.get('/', productController.getAllProducts)

// get specific product
router.get('/product/:id', productController.getProduct)

// get similar products

router.get('/similar/:id', productController.getSimilar)

// get similar products

router.get('/newarrivals', productController.getNewArrivals)

   
module.exports = router