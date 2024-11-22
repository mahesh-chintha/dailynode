var http=require("http");
var fs=require("fs");
var url=require("url");

var server=http.createServer((req,res)=>{
    parsedurl=url.parse(req.url,true);
    paramu=parsedurl.pathname.split("/");
    param=paramu[paramu.length-1];
    console.log(param)

    
    // console.log(paramu[2]);
    if(param=="data"){
        if(req.method=="POST"){
            var body="";
            req.on("data",(chunk)=>{
                body +=chunk.toString();
            })
            req.on("end",()=>{
                res.write(body);
                fs.writeFile("get.txt",body,"utf-8",(err)=>{
                    if(err){
                        res.write("error in req.on end")
                        res.end()
                    }
                    else{
                    res.write("file is created");
                    res.end();
                    }
                });
                
                
            })
        }
        else if(req.method=="GET"){
            fs.readFile("get.txt","utf-8",(err,data)=>{
                if(err){
                    res.write("data not fetched");
                    res.end()
            
                }else{
                    res.write(data);
                    res.end()
                
                }
                res.end();
            })
        }
        
        
        else{
            res.write("file not created");
            res.end();
        }
    }
    
    else {
        res.write("give correct path");
        res.end();
    }

})
port=3478;
server.listen(port,()=>{
    console.log("server is running "+"http://localhost:"+port)
});