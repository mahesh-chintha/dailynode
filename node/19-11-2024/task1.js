var http=require('http')
var url=require('url')

var server=http.createServer(async(req,res)=>{
       var par=url.parse(req.url,true)
       par1=par.pathname.split('/')[par.pathname.split('/').length-1]
if(req.method=="GET"){
    if(par1<=20){
    var data=`https://fakestoreapi.com/products/${par1}`
    var g=await fetch(data)
    var h=await g.json()
   res.write(JSON.stringify(h))
    res.end()
    }
    else{
        res.write("enter valid product number")
        res.end()
    }
}
else{
    res.write(" not found")
    res.end()
}
})

var port=3307
server.listen(port,()=>{
    console.log("http://localhost:"+port)
})

