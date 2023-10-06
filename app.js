const path=require("path");
const rootFolder=require("./util/path")
const express=require("express");
const bodyParser=require("body-parser")
const app=express();
const adminRoutes=require("./Routes/admin");
const shopRoutes=require("./Routes/Shop");
const contactRoutes=require("./Routes/contact")
const pageNotFoundcontroller=require("./controller/404")
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootFolder,"public")))




app.use("/admin",adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(pageNotFoundcontroller.add404);



app.listen(3000);