const http = require("http");


function datacontrol(req,res){
      res.write("<h1>function without arrow</h1>");
      res.end;
}



http.createServer(datacontrol).listen(4001);

http.createServer((req,res)=>{
      res.write("<h1> arrowfuntion used </h1>");
      res.end;
}).listen(4000);
