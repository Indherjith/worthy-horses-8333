const mongoose = require("mongoose");

const kidSchema = new mongoose.Schema({
    user_id : {type : String},
    img : String,
    price : Number,
    productName : String,
    discount: Number,
    size: String,
    color: String,
});


const Kid = mongoose.model("kid",kidSchema);

module.exports = {Kid}