const express = require("express");
const app = express();

app.get("/", function(req, res){
        res.send("Gerenciador Financeiro")
})

app.get("/contato", function(req, res){
    res.send("Página de Contato")
})

app.get("/sobre-empresa", function(req, res){
    res.send("Sobre Empresa")
})

app.get("/Blog", function(req, res){
    res.send("Blog")
})
//localhost:8080
app.listen(8080);


