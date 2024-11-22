var http = require('http');
var url=require('url')

var server = http.createServer(async(req, res) => {
  var data="https://fakestoreapi.com/products"
      var f=await fetch(data)
      var final_data= await f.json()
      var par=url.parse(req.url,true)
      
    if (req.method === "GET") {
      if(par.query.order=="desc"){
       final_data.sort((a,b)=>{
        return b.price-a.price
       })
       res.write(JSON.stringify(final_data))
       res.end();
       
      }else{
        res.write("add params")
       res.end();
       
      }
       
     
    }else{
      res.end("hiii")
    }
   
});

var port = 3005;
server.listen(port, () => {
    console.log("running at http://localhost:" + port);
});
