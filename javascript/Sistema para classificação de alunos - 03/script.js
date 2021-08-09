//Uma escola está precisando criar um sistema que exiba na tela a situação dos alunos com relação a aprovação. Crie um script com os seguintes critérios: 


//Dica: utilize o operador ternário.

//1- os alunos tem 03 notas;
//2 - Você deverá fazer a média entre as três notas;
//3 - Se a media for maior ou igual a 7 exiba na tela "Aprovado";
//4- Se a media for menor que 7 exiba na tela "Reprovado";
//5 - Atribua nome aos alunos e inclua junto a exibição da classificação.


//Obs.: Faça este processo para 03 alunos e enquadre cada um nas situações acima.. //

//aluno 1

var aluno1 = "Luiz";
var nota1 = 7;
var nota2 = 8;
var nota3 = 9;
var media = 0;

media = ( nota1 + nota2 + nota3)/3;

document.write( 
    "O aluno " + aluno1 + " com média " + media, media >= 7 ? " está APROVADO " : " está REPROVADO " 
    );

document.write("</br>"); //quebra de linha

//aluno 2

var aluno2 = "Pedro";
var nota1 = 6;
var nota2 = 4;
var nota3 = 6;
var media = 0;

media = ( nota1 + nota2 + nota3)/3;

document.write( 
    "O aluno " + aluno2 + " com média " + media, media >= 7 ? " está APROVADO " : " está REPROVADO " 
    );

document.write("</br>"); //quebra de linha

//aluno 3

var aluno3 = "Jorge";
var nota1 = 7;
var nota2 = 8;
var nota3 = 9;
var media = 0;

media = ( nota1 + nota2 + nota3)/3;

document.write( 
    "O aluno " + aluno3 + " com média " + media, media >= 7 ? " está APROVADO " : " está REPROVADO" 
    );

