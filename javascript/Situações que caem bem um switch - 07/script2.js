/*2.Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A. 10%
B. 15%
C. 20%
Faça um programa que leia o plano de trabalho e o salário atual 
de um funcionário e calcula e imprime o seu novo salário.*/


categoria = prompt("Digite a categoria","A,B ou C").toUpperCase()
salario = parseFloat(prompt("Digite o salario"))

switch(categoria){

    case "A":
    document.write("salario atual: R$", salario, "aumento 10%, apos aumento:R$",(salario * 1.1));
    break;
    case "B":
    document.write("salario atual:R$", salario, "aumento 15%, apos aumento:R$",(salario * 1.15));
    break;
    case "C":
    document.write("salario atual:R$", salario, "aumento 20%, apos aumento:R$",(salario * 1.2));
    break;
}