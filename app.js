const express=require("express");
const bodyParser=require("body-parser")
const app=express();
app.use(bodyParser.urlencoded({extended:false}))


app.use("/addProd",(req,res,next)=>{
     res.send('<form action="/prod" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit"> add item</button></form>');
})
app.post("/prod",(req,res)=>{
     console.log(req.body);
     res.redirect("/");
})
app.use("/",(req,res,next)=>{
     res.send("hello world")
})



app.listen(3000);