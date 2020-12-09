/**
 * 1 / 5 - Soma Simples
 * 
 * 
 * Desafio
 * 
 * Leia dois valores inteiros identificados como variáveis A e B. Calcule a soma entre elas 
 * e chame essa variável de SOMA.
 * A seguir escreva o valor desta variável.
 * 
 * 
 * Entrada
 * 
 * O arquivo de entrada contém 2 valores inteiros.
 * 
 * 
 * Saída
 * 
 * Imprima a variável SOMA com todas as letras maiúsculas, inserindo um espaço em branco 
 * antes e depois do símbolo de igualdade, seguido pelo valor correspondente à soma de A e B.
 *  
 * 
 * -----------------------------------------
 * | Exemplos de Entrada |Exemplos de Saída|
 * |---------------------|-----------------|
 * |  30                 |                 |
 * |  10                 | SOMA = 40       |
 * |---------------------|-----------------|
 * |---------------------|-----------------|
 * | -30                 |                 |
 * |  10                 | SOMA = -20      |
 * |---------------------|-----------------|
 * |---------------------|-----------------|
 * |   0                 |                 |
 * |   0                 | SOMA = 0        |
 * -----------------------------------------
 * 
 * 
 * 
 * R:
 * **/

 /** Teste */
let arr = [30, 10];    // Teste 01
// let arr = [-30, 10];   // Teste 02
// let arr = [0, 0];      // Teste 03

let cont = 0;

function gets(){
  return arr[cont++]
}


 /** Solução */
let A = parseInt(gets());
let B = parseInt(gets());
console.log(A, B);
console.log("SOMA = " + (A + B) );
