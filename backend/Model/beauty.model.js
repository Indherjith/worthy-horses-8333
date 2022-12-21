const mongoose = require("mongoose");

const beautySchema = new mongoose.Schema({
    user_id : {type : String},
    img : String,
    price : Number,
    productName : String,
    discount: Number,
    size: String,
    color: String,
});


const Beauty = mongoose.model("beauty",beautySchema);

module.exports = {Beauty}