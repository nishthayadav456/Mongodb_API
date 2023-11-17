const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: Number,
    heading: String,
    Brand: String,
    Model: String,
    image: String,
    description: String,
    price: Number,
    category: String,
    casediameter: String,
    chargers: String,
});

const storeModel = mongoose.model("AllData", userSchema);

module.exports = { storeModel };
