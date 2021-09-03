console.log("Olá Mundo!");

var client = "Cézar";

console.log("Cliente: "+ client);

var valProduct = 100;
var valDiscount = 37;

var discountFunc = require("./modules/calDiscount");

var finalValue = discountFunc(valProduct,valDiscount);

console.log("Valor Final do Produto R$ "+finalValue);