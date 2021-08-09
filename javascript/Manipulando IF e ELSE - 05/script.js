/*1. Faça um script que leia 4 números e mostre-os em ordem crescente 
e depois em ordem decrescente.*/

var num1 = 3;
var num2 = 1;
var num3 = 4;
var num4 = 5;

var aux

//num1(3), num2(1), num3(4), num4(5)

if(num2 < num1){
    aux = num1;
    num1 = num2;
    num2 = aux;
}

if(num3 > num1){
    aux = num1;
    num1 = num3;
    num3 = aux;
}


if(num3 > num2){
    aux = num2;
    num2 = num3;
    num3 = aux;
}

document.write(num3,num2,num1,num4, "</br>");
document.write(num4,num1,num2,num3);