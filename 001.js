/** 1 / 3 - Dividindo X por Y
 * 
 * 
 * Desafio
 * 
 *     Você terá o desafio de escrever um algoritmo que leia 2 números e imprima o resultado da 
 * divisão do primeiro pelo segundo. Caso não for possível mostre a mensagem “divisao impossivel” 
 * para os valores em questão.
 * 
 * 
 * Entrada
 * 
 *     A entrada contém um número inteiro N. Este N será a quantidade de pares de valores inteiros 
 * (X e Y) que serão lidos em seguida.
 * 
 * 
 * Saída
 * 
 *      Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, 
 * ou “divisão impossível” caso não seja possível efetuar o cálculo.
 * 
 * 
 * -----------------------------------------
 * |Exemplo de Entrada  |Exemplo de Saída  |
 * |--------------------|------------------|
 * | 3                  |                  |
 * | 3 -2               |-1.5              |
 * |-8  0               |divisao impossivel|
 * | 0  8               | 0.0              |
 * |---------------------------------------|
*/


/** Testes*/

 const teste = '3  ';        //Teste 01
// const teste = '3 -2';        //Teste 02
// const teste = '-8 0';        //Teste 03
// const teste = '0 8';         //Teste 04

function gets(){
    return teste;
}


// Solução
let line = gets().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);
if (Y == 0) {
    console.log("divisao impossivel");
} else if(isNaN(Y)){
} else {
    let divisao = parseFloat(X / Y).toFixed(1); 
    console.log(divisao);
}