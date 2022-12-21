const mongoose = require("mongoose");

const shoeandbagSchema = new mongoose.Schema({
    user_id : {type : String},
    img : String,
    price : Number,
    category : String,
    productName : String,
    discount: Number,
    size: String,
    color: String,
});


const ShoesandBags = mongoose.model("shoeandbag",shoeandbagSchema);

module.exports = {ShoesandBags}