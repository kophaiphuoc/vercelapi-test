const mongoose = require('mongoose');
const productssSchema = new mongoose.Schema({
    nameproduct:{
        type: String,
        required: true
    },
    priceproduct:{
        type: Number,
        required: true
    },
    imageproduct:{
        type: String,
        required: true
    },
    quantityproduct:{
        type: Number,
        required: true
    }
})

const cartproductsSchema = new mongoose.Schema({
    cartproduct:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"products"
        }
    ],
});
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        undefined: true,
    },
    password:{
        type: String,
        required: true
    },
    numberphone:{
        type: String,
        required: true
    },
});

let products = mongoose.model("products",productssSchema);
let user = mongoose.model("user",userSchema);
let cartproducts = mongoose.model("cart",cartproductsSchema);
module.exports = {products,user,cartproducts};