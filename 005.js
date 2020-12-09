/** 
  * 2 / 5 - Exibindo Números Pares
  * 
  * 
  * Desafios
  * 
  * Crie um programa que leia um número e mostre os números pares até esse 
  * número, inclusive ele mesmo.
  * 
  * 
  * Entrada
  * 
  * Você receberá 1 valor inteiro N, onde N > 0.
  * 
  * 
  * Saída
  * 
  * Exiba todos os números pares até o valor de entrada, sendo um em cada linha.
  * 
  * 
  * --------------------------------------
  * |Exemplo de Entrada |Exemplo de Saída|
  * |-------------------|----------------|
  * |                   | 2              |
  * | 6                 | 4              |
  * |                   | 6              |
  * --------------------------------------
  * 
  * R:
  **/ 

  /** Testes */
 const teste = 6;    // Entrada 01
 
 function gets(){
     return teste;
 }


/** Solução */
let numero = gets();

for(var i = 2; i <= numero; i++){
   if (i % 2 === 0){
    console.log(i);
   }
}