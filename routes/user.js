const router = require("express").Router();
const usercontroller = require("../controller/usercontrollers");


// ADD USER
router.post("/adduser",usercontroller.adduser);
// GET ALL USER
router.get("/getalluser",usercontroller.getalluser);

module.exports = router;