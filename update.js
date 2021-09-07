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

connection.connect(function(err){
    if(err) console.error('Erro ao realizar a conexão com o BD: ' + err.stack); return;
});

connection.query("UPDATE users SET nome = 'Cesar 1' WHERE id= 1 ",function(err,result){
if(!err){
    console.log('Usuario editar com sucesso');
}else{
    console.log('Erro ao editar Usuario');
}
});

