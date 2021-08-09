/*Crie uma programa que peça pro usuário digitar sua idade 
e OBRIGUE que a idade digitada esteja correta.*/

var resultado = '';
var idade = 0;

do{
    idade = parseInt(prompt(" Digite sua idade"));
}while(idade > 0 && idade < 200 && typeof(idade) != "string");
document.write(resultado, "Sua idade é");