var http=require('http')
var fs=require('fs')
var url=require('url')
// creating server
var server=http.createServer((req,res)=>{

// params
var params=url.parse(req.url,true)
var params1=params.pathname.split("/")[params.pathname.split("/").length-1]
console.log(params1)

// requesting body data 
if(req.method=="POST" && params1=="data"){
body=""
req.on("data",(chunk)=>{
    body+=chunk.toString()
})
req.on("end",(chunk)=>{
    fs.appendFile("index.txt",body,"utf-8",(err)=>{
       if(err){
        console.log("error in index.txt")
       }
       else{
        console.log("data succesfully sent")
       }
})
res.end()
})
}

// if req is post

else if(req.method=="GET" && params1=="data"){
fs.readFile("index.txt","utf-8",(err,data)=>{
    if(err){
        res.write("error in retreiving data")
        res.end()
    }
    else{
        console.log("data succesfully retrieved ")
        res.write(data)
        res.end()
    }
})

} 
else{
    res.write("enter valid method")
    res.end()
}  
})

// port
var port=3012
server.listen(port,()=>{
console.log("http://localhost:"+port)
console.log("server started")
})
