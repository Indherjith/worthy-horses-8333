const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    user_id : {type : String},
    img : String,
    price : Number,
    category : String,
    productName : String,
    discount: Number,
    size: String,
    color: String,
});


const Men = mongoose.model("men",menSchema);

module.exports = {Men}