const { json } = require("body-parser");
const {products,user,cartproducts} = require(".././model/models");

const productscontroller = {
    addproduct: async (req,res)=>{
        try {
            const newproduct = new products(req.body);
            const productsave =await newproduct.save();
            res.status(200).json(productsave);
        } catch (e) {
            res.status(500).json(e);
        }
    },
    getallproduct: async(req, res)=>{
        try {
            const product = await products.find();
            res.status(200).json(product);
        } catch (e) {
            res.status(500).json(e);
        }
    },
    // GET A PRODUCT
    getanproduct: async (req, res)=>{
        try {
            const aproduct = await products.findById(req.params.id);
            res.status(200).json(aproduct);
        } catch (e) {
            res.status(500).json(e);
        }
    },
    // UPDATE A PRODUCT
    updateproduct: async (req, res)=>{
        try {
            const updateaproduct = await products.findById(req.params.id);
            await updateaproduct.updateOne({$set: req.body});
            res.status(200).json("update sucsessfully");
        } catch (e) {
            res.status(500).json(e);
        }
    },
// DELETE A PRODUCT
    deleteproduct: async (req, res)=>{
        try {
            if(req.params.id != null){
            await cartproducts.updateMany({cartproducts: req.params.id}, {$pull: {cartproducts: req.params.id}});
            await products.findByIdAndDelete(req.params.id);
            res.status(200).json("delete sucsessfully");
            }
            else{
                res.status(500).json("delete failed");
            }
        } catch (e) {
            res.status(500).json("delete failed");
        }
    }
};
module.exports = productscontroller;