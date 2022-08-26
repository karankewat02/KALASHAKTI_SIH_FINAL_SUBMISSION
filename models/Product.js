const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required:true},
        desc: {type: String, required:true},
        img: {type: Array, required:true},
        categories: { type: Array },
        variantStatus: {type: Boolean, default: false},
        variantType: {type: String},
        variantData: {type: Array},
        region:{type: String},
        specifications:{type: Array},
        highlights:{type: String},
        price: {type: Number, required:true},
        region: {type: String},
        isApproved: {type:Boolean , default:false},
        sellerId: {type: String, required:true},
    },
    {timestamps:true}

);

module.exports = mongoose.model("Product",ProductSchema);