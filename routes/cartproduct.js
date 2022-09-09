const router = require("express").Router();
const cartcontrollers = require("../controller/cartproductcontroller");

// ADD CART
router.post("/addacart",cartcontrollers.addcart);
// GET ALL CART
router.get("/allcart",cartcontrollers.getallcart);
// GET AN CART
router.get("/:id",cartcontrollers.getancart);
module.exports = router;