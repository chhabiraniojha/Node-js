const http=require("http");


const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==="/"){
        res.write(
        "<html><header>my text</header><body>hello</body></html"
        )
        res.end()
        
    }
    if(url==="/home"){
        res.write(
        "<html><header>my text</header><body>wellcome to home</body></html"
        )
        res.end()
        
    }
    if(url==="/about"){
        res.write(
        "<html><header>my text</header><body>welcome to abbout us page</body></html"
        )
        res.end()
        
    }
    if(url==="/node"){
        res.write(
        "<html><header>my text</header><body>welcome to node js project</body></html"
        )
        res.end()
        
    }

});
server.listen(4000);