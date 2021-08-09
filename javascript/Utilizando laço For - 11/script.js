/*O professor mandou você somar de 1 até 1000. 
Mas tem um detalhe que ela não sabia: você sabe programar em JavaScript.

Crie um script que faça essa soma, usando o laço for.

Nossa soma vai ficar armazenada na variável soma.*/

soma = 0;

for(i = 1; i <= 1000; i++){
    soma += i;
}
document.write(soma, "</br>");