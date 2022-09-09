const router = require("express").Router();
const produccontroller = require("../controller/productscontroller");

// ADD PRODUCT
router.post("/addproduct",produccontroller.addproduct);
// GET ALL PRODUCT
router.get("/allproducts",produccontroller.getallproduct);
// GET A PRODUCT
router.get("/:id",produccontroller.getanproduct);
// UPDATE A PRODUCT
router.put("/:id",produccontroller.updateproduct);
// DELETE A PRODUCT AND UPDATE A CART
router.delete("/:id",produccontroller.deleteproduct);
module.exports = router;