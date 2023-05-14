const express = require('express');
const router = express.Router();
const Product = require('../model/product');


//homepage for product api
router.get("/", (req, res) => {
    try {
        res.status(200).json({
            message: "Welcome to Product REST API home page"
        });
    } catch (error) {
        console.log(error);
    }
})

//get all products
router.get("/getAll", async (req, res) => {
    try {
        const myData = await Product.find({});
        res.status(200).json(myData);
    } catch (error) {
        console.log(error);
    }
})

//get a product by id
router.get("/get/:id", async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
})

//save a new product
router.post("/save", async (req, res) => {
    const data = new Product({
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        company: req.body.company,
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);

    } catch (error) {
        console.log(error);
    }
})

//update a product by id
router.patch("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400);
    }
})

//delete a product by id
router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id);
        res.status(200).send(`Document with ${data.name} has been deleted`);
    } catch (error) {
        console.log(error);
    }
})

//filtration based on query params
router.get("/get", async (req, res) => {
    try {
        const data = await Product.find(req.query);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
})

//sort data by name
router.get("/getAllSorted/name", async (req, res) => {
    try {
        const data = await Product.find({}).sort('-name');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
})

//get only name and price
router.get("/getNamePrice", async (req, res) => {
    try {
        const data = await Product.find({}).select('name price');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;