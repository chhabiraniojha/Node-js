const path=require("path");
const rootFolder=require("../util/path");


exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootFolder,"views","addProd.html"));
};

exports.postAddProduct=(req,res)=>{
    console.log(req.body);
    res.redirect("/");
};
