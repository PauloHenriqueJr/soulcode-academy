/*2. Também elabore um outro script que realize o IMC
O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
uma indicação sobre a condição de peso de uma pessoa adulta.
A fórmula é IMC = peso / ( altura )2

Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo
com a tabela abaixo.

IMC em adultos Condição
Abaixo de 18,5 Abaixo do peso
Entre 18,5 e 25 Peso normal
Acima de  25 e 30 Acima do peso
Acima de 30 obeso*/



	var peso = 0;
	var altura = 0;

	altura = parseFloat(prompt(" Digite sua altura "));
	peso = parseFloat(prompt(" Digite seu peso "));

	var imc = peso / (altura * altura)//altura**2
    
	
	if (imc >= 16) {
		resposta = "A classificação é MAGREZA GRAVE."
	}

	else if (imc >= 16 && imc < 17){
		resposta = "A classificação é MAGREZA MODERADA."
	}

	else if (imc >= 17 && imc < 18.5){
		resposta = "A classificação é MAGREZA LEVE."
	}

	else if (imc >= 18.5 && imc < 25){
		resposta = "A classificação é SAUDÁVEL."
	}

	else if (imc >= 25 && imc < 30){
		resposta = "A classificação é SOBREPESO."
	}

	else if (imc >= 30 && imc < 35){
		resposta = "A classificação é OBESIDADE GRAU I."
	}	

	else if (imc >= 35 && imc < 40){
		resposta = "A classificação é OBESIDADE GRAU II (Severa)."
	}	

	else {
		resposta = "A classificação é OBESIDADE GRAU III (Mórbida)."
	}

	document.write(resposta, "</br>");
	
