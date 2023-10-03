const http=require("http");
const fs=require("fs");


const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    var message
    var messages="hiiiiiiii"
   if(url==="/"){
    // Use fs.readFile() method to read the file
    fs.readFile   ('message.txt', {encoding:'utf8'},(err, data)=>{
      
    // Display the file content
    
     res.write("<html>");
     res.write("<head></head>");
     res.write(`<body> ${data}</body>`)
     res.write("<body>");
     
     res.write('<form action="/message" method="POST">');
     res.write('<input type="text" name="message"><button type="submit">Send</button>');
     res.write("</form>");
     res.write("</body>");
     res.write("</html>");
     return res.end();
     });
     
   
   
    
   }
   if(url==="/message"  && method=="POST"){
     const body=[];
     req.on("data",(chunk)=>{
          body.push(chunk);
     })
     req.on("end",()=>{
        const parseBody=Buffer.concat(body).toString();
        const message=parseBody.split('=')[1];
        fs.writeFileSync("message.txt",message)
        res.statusCode=302;
        res.setHeader("location","/")
        return res.end();
     })
     }

});
server.listen(4000);