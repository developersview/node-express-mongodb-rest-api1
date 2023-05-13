const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const products_routes = require('./routes/products.routes');

app.get("/", (req, res) => {
    // res.send("Hi, I am live!");
    res.json({ message: "Let's build a REST API" });
});

//middleware

app.use('/api/v1/products', products_routes);


const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);

    }
}

start();