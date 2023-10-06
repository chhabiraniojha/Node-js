const path=require("path");
const rootFolder=require("../util/path");

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootFolder,"views","contact.html"))
};

exports.postContact=(req,res,next)=>{
    res.redirect("/success")
};
exports.success=(req,res,next)=>{
    res.sendFile(path.join(rootFolder,"views","success.html"))
};