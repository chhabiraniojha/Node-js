const path=require("path");

const rootFolder=require("../util/path")

const express=require("express");

const router=express.Router();
router.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(rootFolder,"views","addProd.html"));
})
router.post("/add-product",(req,res)=>{
    console.log(req.body);
    res.redirect("/");
})
module.exports=router;