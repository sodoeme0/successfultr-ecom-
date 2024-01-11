const Product = require("../models/product")

exports.getAllProducts = async(req, res) =>{
     // Get all products from DB
     const products = await Product.find()

     // If no products
     if (!products.length) {
         return res.status(400).json({ message: "No products found" })
     }
 
     res.json(products)
}

exports.getProduct = async (req, res) => {
    // Get a product from DB
    let id = req.params.id
    console.log(id)
    const product = await Product.findById(id)


    // If no product
    if (!product) {
        return res.status(400).json({ message: "Product not found" })
    }

    res.json(product)

}

exports.getSimilar = async (req, res) =>{

    let id = req.params.id
    console.log(id)
    const product = await Product.findById(id)

    
    // If no product
    if (!product) {
        return res.status(400).json({ message: "Product not found" })
    }

    const category = product.category
    const similar = await Product.find({category: category})

    if(!similar){
        return res.status(400).json({ message: "No Similar Products" })

    }

    return res.json(similar)
}


exports.getNewArrivals = async (req, res) =>{
    const newArrivals = await Product.find({tags: {$in: ['new']}})
    return res.json(newArrivals)
}