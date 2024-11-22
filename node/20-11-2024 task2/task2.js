var http=require('http')
var fs=require('fs')
var server=http.createServer((req,res)=>{
    if(req.method=="GET"){
    fs.readFile("index.html","utf-8",(err,data)=>{
      if(err){
        res.write("the data is not found")
        res.end()
      }
      else{
        fs.writeFile("index2.html",data,"utf-8",(err)=>{

            if(err){
            
                res.write(JSON.stringify(err.message))
                res.end()
            }
            else{
                res.write("succesfully created")
                res.end()
            }
            
            })
      }
    })
}
else{
    res.write("data not found")
    res.end()
}
})
var port=3010
server.listen(port,()=>{
    console.log("http://localhost:"+port)
})