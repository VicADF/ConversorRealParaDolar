var nome = prompt("Digite seu nome");
var apresentacao = " Olá " + nome + " o dolar está custando extamente: ";
var valorEmDolar = prompt("Digite o valor em Dolar");
var cotacaoDoDolar = 5.05;
var valorEmReal = valorEmDolar * cotacaoDoDolar;


valorEmReal = valorEmReal.toFixed(2);


alert(apresentacao + "R$ " + valorEmReal); 