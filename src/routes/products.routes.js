const express = require('express');
const router = express.Router();
const Product = require('../model/product');


//homepage for product api
router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Product api home page" });
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
});

//update a product by id
router.patch("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )
    } catch (error) {
        console.log(error);
        res.status(400);
    }
})

module.exports = router;