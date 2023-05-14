const mongoose = require('mongoose');

//connect to db using mongoose
const connectDB = (URI) => {
    console.log("connect db");
    return mongoose.connect(URI);
}

module.exports = connectDB;