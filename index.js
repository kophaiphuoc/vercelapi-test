const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { json } = require('body-parser');
dotenv.config();
const userroutter = require("./routes/user");
const productrouter = require("./routes/products");
const cartrouter = require("./routes/cartproduct");
// connect to mongoose
try {
    mongoose.connect(process.env.mongodb_url,() => {
        console.log("connect to mongoose");
    });
} catch (error) {
    console.error(error);
}

app.use(bodyParser.json({limit:"100mb"}));
app.use(cors());
app.use(morgan("common"));
// ROUTER user
app.use("/user",userroutter);
// router products
app.use("/product",productrouter);
// router cart
app.use("/cart",cartrouter);

app.get("/api",(req,res,next)=>{
    res.status(200).json("phước nè xin chào mọi người");
});

app.listen(process.env.PORT || 9999,()=>{
    console.log('listening on port ');
});