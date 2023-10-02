const http=require("http");


const server=http.createServer((req,res)=>{
    console.log("suvransu");
});
server.listen(4000);