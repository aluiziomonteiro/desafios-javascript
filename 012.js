/**
 * 4/5 Imposto de Renda
 * 
 * 
 * Desafio
 * 
 * Há um país denominado Lilipute, todos os habitantes ficam felizes em pagar seus impostos, 
 * pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados 
 * em benefício da população, sem qualquer desvio. A moeda deste país é o Libs, cujo símbolo é o R$.
 * Você terá desafio de ler um valor com duas casas decimais, equivalente ao salário de uma pessoa 
 * de Libs. Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, 
 * segundo a tabela abaixo.
 * 
 * 
 * ----------------------------------------------------
 * |Exemplos de Entrada            |Imposto de Renda  |
 * |-------------------------------|------------------|
 * | de 0.00 a 2000.00             | Isento           |
 * |-------------------------------|------------------|
 * | de R$ 2000.01 até R$ 3000.00  | 8%               |
 * |-------------------------------|------------------|
 * | de R$ 3000.01 até R$ 4500.00  | 18%              |
 * |-------------------------------|------------------|
 * | acima de R$ 4500.00           | 28%              |
 * ----------------------------------------------------
 * 
 * 
 * 
 * Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois a 
 * faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo 
 * fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 
 * no total. O valor deve ser impresso com duas casas decimais.
 * 
 * 
 * Entrada
 * 
 * A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.
 * 
 * 
 * Saída
 * 
 * Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto de Renda, com 
 * duas casas após o ponto. Se o valor de entrada for menor ou igual a 2000, deverá ser impressa 
 * a mensagem "Isento".
 * 
 * ------------------------------------------
 * |Exemplos de Entrada  |Exemplos de Saída |
 * |---------------------|------------------|
 * |3002.00              | R$ 80.36         |
 * |---------------------|------------------|
 * |1701.12              |   Isento         |
 * |---------------------|------------------|
 * |4520.00              |R$ 355.60         |
 * -----------------------------------------|
 * 
 * 
 * R:
 **/ 

 /** Testes */
let teste = 3002.00;        // Entrada 01
// let teste = 1701.12;        // Entrada 02
// let teste = 4520.00;        // Entrada 03

 function gets(){
     return teste;
 }
let salario = gets();
let imposto;

    if (salario > 4500.00){
      imposto = (salario - 4500.00) * 0.28;
      imposto = imposto + (4500.00 - 3000.00) * 0.18;
      imposto = imposto + (3000.00 - 2000.00) * 0.08;
    } 
    else if (salario > 3000.00){
      imposto = (salario - 3000.00) * 0.18;
      imposto = imposto + (3000.00 - 2000.00) * 0.08;
    }
    else if (salario > 2000.00){
      imposto = (salario - 2000.00) * 0.08;
    }
    else if (salario <= 2000.00 && salario >= 0){
      imposto = "Isento";
    } 
    else {
      imposto = "Indefinido";
    }

    switch (typeof imposto) {
        case "number" : console.log("R$ "+imposto.toFixed(2)); 
          break;
        default : console.log(imposto);
    }

