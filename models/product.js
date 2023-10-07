const fs=require("fs");
const path=require("path")
const rootFolder=require("../util/path");

module.exports=class Product{
    constructor(title){
       this.title=title
    }
    save(){
        const p=path.join(rootFolder,"data","product.json")
        fs.readFile(p,(err,fileContent)=>{
            let products=[];
            if(!err){
                products.push(this)
            }
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err)
            })
        })
    }
     
    static fetchAll(cb){
        const p=path.join(rootFolder,"data","product.json")
        fs.readFile(p,(err,fileContent)=>{
            cb(JSON.parse(fileContent));
            })
    }

}