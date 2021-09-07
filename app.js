const express = require("express");
const app = express();

//Conexao com MYSQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'celkeone',
    password : '123456',
    database : 'celke'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });


connection.query('SELECT * FROM users', function(err,rows,fields){
    if(!err){
        console.log("Resultado: ",rows);
    }else{
        console.log("Erro ao realizar a consulta");
    }
})

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


