var salario = 1800;
var fgts_inss = 0.2;
var decimo_terceiro = salario;
var adicional_ferias = ((1/3)*salario);
var custo_funcionario_ano = 0;
var impostos = 0;


//calcule o custo do funcionario no ano
// imposto = imposto * salarios, 13°, ferias
//12 meses + 13° + impostos + ferias

impostos = fgts_inss * ((12*salario) +decimo_terceiro+adicional_ferias);
custo_funcionario_ano = (salario * 12) + decimo_terceiro + adicional_ferias + impostos;

document.write(custo_funcionario_ano);

document.write("</br>");

//teste de if e else

a = 6;
b = 4;

if (a >= b){
     document.write(" Se A for maior ou igual a B: ")
}

else {
    document.write(" A não é maior ou igual a B: ")
};

document.write("</br>");

//idade
var idade = 16;

if (idade >= 18){
    document.write(" Maior de idade ")
}

else {
   document.write(" Menor de idade ")
};

document.write("</br>");
// adicional com adolescente

var idade = 16;

if (idade >= 18){
    document.write(" Maior de idade ")
}

else if (idade >= 12) {
   document.write(" adolescente ")
}

else {
    document.write(" criança")
 };


 //imc com if e else



