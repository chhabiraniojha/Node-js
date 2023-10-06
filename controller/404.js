const path=require("path");
const rootFolder=require("../util/path");

exports.add404=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootFolder,"views","404.html"))

};