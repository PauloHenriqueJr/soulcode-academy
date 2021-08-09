/*Resolva os scripts abaixo utilizando o VSCODE
COMANDO IF

2) Faça um script que mostre na tela se um número é par ou ímpar*/


var number;

numero = parseInt(prompt(" Digite o valor "));

if(!(number % 2 == 0)){ // number % 2 != 0 pode também
    document.write(" o numero é impar ");
}
if(number % 2){ // number % 2 == 0 pode também
    document.write(" o numero é Par ");
}