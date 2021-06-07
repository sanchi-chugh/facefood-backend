const mongoose = require('mongoose');

const homeSchema = {
    name: String,
    price: Number
};

const Homeitem = mongoose.model("Homeitem", homeSchema);

module.exports = Homeitem;