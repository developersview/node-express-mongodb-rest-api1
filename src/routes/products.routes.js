const express = require('express');
const router = express.Router();

const { getAllProducts, getAllProductsTesting } = require('../controller/products.controller');

//homepage for product api
router.route("/").get(getAllProducts);

//homepage for product api testing
router.route("/testing").get(getAllProductsTesting);

module.exports = router;