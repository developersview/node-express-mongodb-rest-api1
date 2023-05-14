require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/db.connect');
const products_routes = require('./routes/products.routes');

//decalring port using .env file
const PORT = process.env.PORT || 5000;

//for parsing json value
app.use(express.json());

//homepage of application
app.get("/", (req, res) => {
    try {
        res.status(200).json({
            message: "Welcome to my 1st REST API built using node, express and mongo"
        });
    } catch (error) {
        console.log(error);
    }

});

//middleware routes
app.use('/api/v1/products', products_routes);

//start method for the application
const start = async () => {
    try {
        await connectDB(process.env.DATABASE_URI);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);

    }
}

start();