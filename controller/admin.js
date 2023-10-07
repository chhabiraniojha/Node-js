const path=require("path");
const rootFolder=require("../util/path");
const Product=require("../models/product");


exports.getAddProduct=(req,res,next)=>{
    Product.fetchAll((product)=>{
        console.log(product)
        res.sendFile(path.join(rootFolder,"views","addProd.html"))
    });
    
    
};

exports.postAddProduct=(req,res)=>{
    const p=new Product(req.body.title);
    p.save()
    console.log(p);
    res.redirect("/");
};
