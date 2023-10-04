const express=require("express");
const app=express();

app.use((req,res,next)=>{
     res.send( { key1: "value" });
})



app.listen(3000);