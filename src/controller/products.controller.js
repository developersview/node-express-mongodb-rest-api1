const Product = require('../model/product');

const getAllProducts = async (req, res) => {
    const myData = await Product.find({});
    res.status(200).json(myData);
};

const saveProduct = async (req, res) => {
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

}

module.exports = { getAllProducts, saveProduct };