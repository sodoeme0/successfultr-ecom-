require('dotenv').config()
const Product = require("./models/product");
const products = require("./products.json");
const mongoose = require("mongoose")



connectDB()
bulkWrite(products)





async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("connection success")
    } catch (err) {
        console.log(err)
    }
}



async function bulkWrite(products){
    const result = await Product.insertMany(products)
    console.log(result)

}