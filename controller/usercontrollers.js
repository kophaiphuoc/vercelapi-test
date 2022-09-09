const {products,user,cartproducts} = require(".././model/models");


//  ADD USER
const usercontroller = {
    adduser: async (req,res)=>{
       try{
        const newuser = new user(req.body);
        const saveuser = await newuser.save();
        res.status(200).json(saveuser);
       }catch(e){
        res.status(500).json(e);
       }
    },
// GET ALL USERS
    getalluser: async (req, res)=>{
        try {
            const users = await user.find();
            res.status(200).json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}


module.exports = usercontroller;