var http = require('http');
var url = require('url');


var server = http.createServer(async (req, res) => {
  var data = "https://fakestoreapi.com/products";
  var f = await fetch(data);
  var final_data = await f.json();
  var par = url.parse(req.url, true);

  console.log("Query:", par.query); 

  if (req.method === "GET") {
    switch (par.query.order) {
      case "desc":
        final_data.sort((a, b) => {
          return b.price - a.price;
        });
        res.write(JSON.stringify(final_data));
        break;
      case "asc":
        final_data.sort((a, b) => {
          return a.price - b.price;
        });
        res.write(JSON.stringify(final_data));
        break;
      default:
        res.write(JSON.stringify(final_data));
        break;
    }
  }

  res.end();
});

var port = 3006;
server.listen(port, () => {
  console.log("running at http://localhost:" + port);
});
