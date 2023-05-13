const mongoose = require('mongoose');

const connetDB = (URI) => {
    console.log("connect db");
    return mongoose.connect(URI);
}

module.exports = connetDB;