/*Faça um script onde informe a quantidade de dias do mês de acordo com o mês digitado
 (para o mês use números ou string). Utilize switch com break*/


 var mes = parseInt(prompt(" Digite o numero do mes "));

 switch (mes) {
     case 1:
     document.write("Janeiro, 31 dias");
     break;
     case 2:
     document.write("fevereiro, 28 dias, em anos bisextos 29 dias");
     break;
     case 3:
     document.write("Março, 31 dias");
     break;
     case 4:
     document.write("Abril, 30 dias");
     break;
     case 5:
     document.write("Maio, 31 dias");
     break;
     case 6:
     document.write("junho, 30 dias");
     break;
     case 7:
     document.write("julho, 31 dias");
     break;
     case 8:
     document.write("Agosto, 31 dias");
     break;
     case 9:
     document.write("Setembro, 30 dias"); 
     break; 
     case 10:
     document.write("Outubro, 31 dias");
     break;
     case 11:
     document.write("Novembro, 30 dias");
     break;
     case 12:
     document.write("Dezembro, 31 dias");
     break;

    default:
        document.write ("Mês inexistente", mes);
     
}

