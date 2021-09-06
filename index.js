var http = require('http');

http.createServer(function(rec,res){
    res.end("Gerenciador Financeiro")
}).listen(8080);