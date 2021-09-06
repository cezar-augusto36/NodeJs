const express = require("express");
const app = express();

app.get("/", function(req, res){
        res.send("Gerenciador Financeiro")
})

app.listen(8080);

