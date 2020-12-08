/**
 * 3 / 5 - Análise de Números
 * 
 * 
 * Desafio
 * 
 * Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores 
 * informados são pares, quantos valores informados são ímpares, quantos valores 
 * informados são positivos e quantos valores informados são negativos.
 * 
 * 
 * Entrada
 * 
 * Você receberá 5 valores inteiros.
 * 
 * 
 * Saída
 * 
 * Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e 
 * não esquecendo o final de linha após cada uma.
 *  
 * 
 * ---------------------------------------------
 * |Exemplo de Entrada |Exemplo de Saída       |
 * |-------------------|-----------------------|
 * |-5                 |3 valor(es) par(es)    |    
 * | 0                 |2 valor(es) impar(es)  |       
 * |-3                 |1 valor(es) positivo(s)|         
 * |-4                 |3 valor(es) negativo(s)|         
 * |12                 |                       |
 * ---------------------------------------------
 * 
 * 
 * R:
**/

 /** Teste */
 const teste = ['-5', '0', '-3', '-4', '12'];

 function gets(){
     return teste[i];
 }


 /** Solução */
var par = 0;
var impar = 0;
var pos = 0;
var neg = 0;

for (var i = 0; i < 5; i++){
  let numero = gets();
  
  if (numero % 2 === 0){
    par++;        
  }else {
    impar++;
  }
  
  if (numero > 0){
    pos++;
  } else if (numero < 0){
    neg++;
  }
}

console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(pos + " valor(es) positivo(s)");
console.log(neg + " valor(es) negativo(s)");