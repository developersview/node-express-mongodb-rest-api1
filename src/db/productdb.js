require('dotenv').config();
const connectDB = require('./db.connect');
const Product = require('../model/product');
const productJson = require('../db/product.json');

//start method to insert a json file to collection
const start = async () => {
    try {
        await connectDB(process.env.DATABASE_URI);
        await Product.deleteMany();
        await Product.create(productJson);
        console.log('Success');
    } catch (error) {
        console.log(error);
    }
}
start();