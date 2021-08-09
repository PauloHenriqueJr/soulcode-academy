/*Resolva os scripts abaixo utilizando o VSCODE
COMANDO IF

3) 11) Elabore um script que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista no cartão ou cheque, recebe 10% de desconto
2 À vista no dinheiro, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10% */


var produto = 100;

pag = parseInt(prompt(" Escolha uma opção: 1, 2, 3 ou 4 "));


if(pag == 1)
    document.write(" O valor a ser pago é: ", produto * 0.9);


if(pag == 2)
    document.write(" O valor a ser pago é: ", produto * 0.85);


if(pag == 3)
    document.write(" O valor a ser pago é: ", produto);


if(pag == 4)
    document.write(" O valor a ser pago é: ", produto * 1.1);



