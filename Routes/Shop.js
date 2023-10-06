const path=require("path");
const rootFolder=require("../util/path")

const express=require("express");

const router=express.Router();
router.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootFolder,"views","shop.html"))
})
module.exports=router;