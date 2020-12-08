/** 
 * 4 / 5 - Contagem de Cédulas
 * 
 * 
 * Desafio
 * 
 * Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas 
 * possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar 
 * são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas 
 * necessárias.
 * 
 * 
 * Entrada
 * 
 * Você receberá um valor inteiro N (0 < N < 1000000).
 * 
 * 
 * Saída
 * 
 * Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o 
 * exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.
 * 
 *  
 * -----------------------------------------------
 * |Exemplo de Entrada |     Exemplo de Saída    |
 * |-------------------|-------------------------|
 * |                   | 576                     |
 * |                   | 5 nota(s) de R$ 100,00  |
 * |                   | 1 nota(s) de R$ 50,00   |
 * |  576              | 1 nota(s) de R$ 20,00   |
 * |                   | 0 nota(s) de R$ 10,00   |
 * |                   | 1 nota(s) de R$ 5,00    |
 * |                   | 0 nota(s) de R$ 2,00    |
 * |                   | 1 nota(s) de R$ 1,00    |
 * |-------------------|-------------------------|
 * |-------------------|-------------------------|
 * |                   | 11257                   |
 * |                   | 112 nota(s) de R$ 100,00|
 * |                   | 1 nota(s) de R$ 50,00   |
 * |11257              | 0 nota(s) de R$ 20,00   |
 * |                   | 0 nota(s) de R$ 10,00   |
 * |                   | 1 nota(s) de R$ 5,00    |
 * |                   | 1 nota(s) de R$ 2,00    |
 * |                   | 0 nota(s) de R$ 1,00    |
 * |-------------------|-------------------------|
 * |-------------------|-------------------------|
 * |                   | 503                     |
 * |                   | 5 nota(s) de R$ 100,00  |
 * |                   | 0 nota(s) de R$ 50,00   |
 * |  503              | 0 nota(s) de R$ 20,00   |
 * |                   | 0 nota(s) de R$ 10,00   |
 * |                   | 0 nota(s) de R$ 5,00    |
 * |                   | 1 nota(s) de R$ 2,00    |
 * |                   | 1 nota(s) de R$ 1,00    |
 * -----------------------------------------------
 * 
 * 
 * R:
**/



/** Teste - Descomente as variáveis, uma por uma para testar */

const teste = 576;   // Teste 01
// const teste = 11257; // Teste 02     
// const teste = 503;   // Teste 03

function gets(){
    return teste;
}


/** Solução */
let numero = gets();

var n100 = 0;
var n50 = 0;
var n20 = 0;
var n10 = 0;
var n5 = 0;
var n2 = 0;
var n1 = 0;

console.log(numero);

while (numero >= 100){
  numero = numero - 100;
  n100++;
}
console.log(n100 + " nota(s) de R$ 100,00");

while (numero >= 50){
  n50++;
  numero = numero - 50;
}
console.log(n50 + " nota(s) de R$ 50,00");

while (numero >= 20){
  n20++;
  numero = numero - 20;
}
console.log(n20 + " nota(s) de R$ 20,00");

while (numero >= 10){
  n10++;
  numero = numero - 10;
}
console.log(n10 + " nota(s) de R$ 10,00");

while (numero >= 5){
  n5++;
  numero = numero - 5;
}
console.log(n5 + " nota(s) de R$ 5,00");

while (numero >= 2){
  n2++;
  numero = numero - 2;
}
console.log(n2 + " nota(s) de R$ 2,00");

while (numero >= 1){
  n1++;
  numero = numero - 1;
}
console.log(n1 + " nota(s) de R$ 1,00");
