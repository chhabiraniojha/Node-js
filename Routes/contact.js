const path=require("path");
const rootFolder=require("../util/path")

const express=require("express");

const router=express.Router();
router.get("/success",(req,res,next)=>{
    res.sendFile(path.join(rootFolder,"views","success.html"))
})
router.get("/contact",(req,res,next)=>{
    res.sendFile(path.join(rootFolder,"views","contact.html"))
})
router.post("/contact",(req,res,next)=>{
    res.redirect("/success")
})
module.exports=router;