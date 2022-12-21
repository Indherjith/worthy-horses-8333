
const mongoose = require("mongoose");

const womenSchema = new mongoose.Schema({
    user_id : {type : String},
    img : String,
    price : Number,
    productName : String,
    discount: Number,
    size: String,
    color: String,
})


const Womens = mongoose.model("women",womenSchema);

module.exports = {Womens}