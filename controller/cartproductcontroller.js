const { response } = require("express");
const {products,user,cartproducts} = require(".././model/models");

const cartcontrollers ={
    // ADD CART
    addcart: async (req,res)=>{
        try {
            const newcart = new cartproducts(req.body);
            const cartsave =await newcart.save();
            if(req.body.cartproduct){
                const cartid = products.find({_id:req.body.products});
                await cartid.updateOne({$push: {cartproduct:cartsave._id}});
                res.status(200).json(cartsave);
            }
        } catch (e) {
            res.status(500).json(e);
        }
    },
    // GET ALL CART
    getallcart: async(req, res)=>{
        try {
            const cart = await cartproducts.find();
            res.status(200).json(cart);
        } catch (e) {
            res.status(500).json(e);
        }
    },
    // GET AN CART
    getancart:async(req, res)=>{
        try {
            const ancart = await cartproducts.findById(req.params.id).populate("cartproduct");
            res.status(200).json(ancart);
        } catch (e) {  
            res.status(500).json(e);
        }
    }
};
module.exports = cartcontrollers;