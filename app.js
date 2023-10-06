const path=require("path");
const rootFolder=require("./util/path")
const express=require("express");
const bodyParser=require("body-parser")
const app=express();
const adminRoutes=require("./Routes/admin");
const shopRoutes=require("./Routes/Shop");
const contactRoutes=require("./Routes/contact")
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootFolder,"public")))




app.use("/admin",adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use((req,res,next)=>{
     res.status(404).sendFile(path.join(rootFolder,"views","404.html"))

})



app.listen(3000);