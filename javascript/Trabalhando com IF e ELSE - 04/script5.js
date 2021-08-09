/*COMANDO IF/ELSE com operadores Lógicos

5) Crie um script que tenha uma variável com a idade de uma pessoa e que verifique se ela é obrigada a votar seguindo as condições abaixo
- Menor de 16 anos - Não pode votar
- 16 e 17 anos - Voto opcional
- Maiores de 18 anos - Obrigatório
- Maiores de 70 anos - Não obrigatório */

var idade;

idade = parseInt(prompt(" Digite sua idade: "));

if(idade > 18 && idade < 70)
document.write(" Você é obrigada a votar: ");


