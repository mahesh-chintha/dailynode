var http=require("http")
var fs=require('fs')
var server=http.createServer(async(req,res)=>{
    if(req.method=="GET"){
var data="https://fakestoreapi.com/products"
var h=await fetch(data)
var i=await h.json()

fs.writeFile("package.json",JSON.stringify(i),"utf-8",(err)=>{

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
var port=3009
server.listen(port,()=>{
    console.log('http://localhost:'+port)
})


