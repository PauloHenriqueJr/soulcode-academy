/*COMANDO IF ELSE

4) Crie um Script que tenha dois números e mostre o maior deles, ou se eles são iguais.*/


var num1;
var num2;

num1 = parseInt(prompt(" Digite o primeiro valor: "));
num2 = parseInt(prompt(" Digite o primeiro valor: "));

if(num1 > num2)
document.write(num1," é maior ");

else if(num1 == num2)//pode usar if apenas
document.write(" São iguais ");

else
document.write(num2," é maior ");