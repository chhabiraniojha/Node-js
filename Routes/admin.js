const path=require("path");

const rootFolder=require("../util/path")

const express=require("express");
const productController=require("../controller/admin")

const router=express.Router();
router.get("/add-product",productController.getAddProduct)
router.post("/add-product",productController.postAddProduct)
module.exports=router;