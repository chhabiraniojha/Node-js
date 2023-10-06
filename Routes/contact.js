const path=require("path");
const rootFolder=require("../util/path")
const contactController=require("../controller/contact")

const express=require("express");

const router=express.Router();
router.get("/success",contactController.getContact)
router.get("/contact",contactController.postContact)
router.post("/contact",contactController.success)
module.exports=router;