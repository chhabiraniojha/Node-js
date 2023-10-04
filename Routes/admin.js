const express=require("express");

const router=express.Router();
router.get("/addProd",(req,res,next)=>{
    res.send('<form action="/admin/addProd" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit"> add item</button></form>');
})
router.post("/addProd",(req,res)=>{
    console.log(req.body);
    res.redirect("/");
})
module.exports=router;