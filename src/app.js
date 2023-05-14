require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./db/db.connect');

const PORT = process.env.PORT || 5000;

const products_routes = require('./routes/products.routes');

app.use(express.json());

//homepage
app.get("/", (req, res) => {
    // res.send("Hi, I am live!");
    res.json({ message: "Let's build a REST API" });
});

//middleware routes
app.use('/api/v1/products', products_routes);


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