const getAllProducts = async (req, res) => {
    res.status(200).json({ message: "Get All products" });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ message: "Get All products testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };