const mongoose = require('mongoose');
let URI;

const connectDB = (URI) => {
    console.log("connect db");
    return mongoose.connect(URI);
}

module.exports = connectDB;