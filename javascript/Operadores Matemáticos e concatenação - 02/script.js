var idade_minha = 32;//minha idade
var idade_filho = 2;//idade do meu filho
var resultado_item_1 = 0;
var idade_pai = 40;//idade do meu pai
var resultado_item_2 = 0;
var idade_irmao1 = 20;//idade do meu primeiro irmão
var idade_irmao2 =30;//idade do meu segundo irmão
var resultado_item_3 = 0;
var renda_familiar = 10000;//minha renda familiar
var resultado_item_4 = 0;
var quantidade_pessoas_familia = 5; //pessoas da familia

resultado_item_1 = idade_minha + idade_filho; 
document.write("Soma da minha idade com a do meu filho: " + resultado_item_1 + "</br>");

resultado_item_2 = resultado_item_1 * idade_pai;
document.write("Soma da minha idade com a do meu filho, vezes a idade do meu pai: " + resultado_item_2 + "</br>");

resultado_item_3 = idade_irmao1 + idade_irmao2;
resultado_item_3 = resultado_item_3 * idade_minha;
resultado_item_3 = resultado_item_3 / resultado_item_1;

document.write("Resultado do item 3: " + resultado_item_3 + "</br>");

resultado_item_4 = renda_familiar / quantidade_pessoas_familia;
resultado_item_4 = resultado_item_4 * 30;
document.write("Renda familiar, dividida pela quantidade de pessoas, vezes 30: " + resultado_item_4 + "</br>");

