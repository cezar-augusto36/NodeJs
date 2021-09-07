const express = require("express");
const app = express();

app.get("/", function(req, res){
        res.sendFile(__dirname + "/src/index.html"); //__dirname serve para puxar todo o caminho do diretorio
})

app.get("/contato", function(req, res){
    res.send("Página de Contato")
})

app.get("/sobre-empresa", function(req, res){
    res.sendFile(__dirname+"/src/sobre-empresa.html");
})

app.get("/Blog", function(req, res){
    res.send("Blog")
})
//localhost:8080
app.listen(8080);


