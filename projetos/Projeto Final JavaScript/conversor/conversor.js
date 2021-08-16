const tipo_entrada = document.getElementById('moeda-um');
const tipo_saida = document.getElementById('moeda-dois');
const entrada = document.getElementById('valor-um');
const saida = document.getElementById('valor-dois');

const taxaEl = document.getElementById('taxa');
const trocar = document.getElementById('trocar');

const USDtoUSD = 1
const BRLtoUSD = 0.18
const CADtoUSD = 0.8
const ARStoUSD = 0.011
const GBPtoUSD = 1.39
const EURtoUSD = 1.19


function toUSD(input_values = new Number(), input_type = new String()) {
  switch (input_type.toString().toUpperCase()) {
    case "USD":
      return (input_values * USDtoUSD).toFixed(2)
      break;

    case "BRL":
      return (input_values * BRLtoUSD).toFixed(2)
      break;

    case "CAD":
      return (input_values * CADtoUSD).toFixed(2)
      break;

    case "ARS":
      return (input_values * ARStoUSD).toFixed(2)
      break;

    case "GBP":
      return (input_values * GBPtoUSD).toFixed(2)
      break;

    case "EUR":
      return (input_values * EURtoUSD).toFixed(2)
      break;

    default:
      alert("ERRO INTERNO1. POR NÃO SABER QUE ERA IMPOSSÍVEL, FOI LÁ E SOUBE")
      break;
  }
}

function toOutput(usd_value = new Number(), output_type = new String()) {
  switch (output_type.toString().toUpperCase()) {
    case "USD":
      return (usd_value / USDtoUSD).toFixed(2)
      break;
    case "BRL":

      return (usd_value / BRLtoUSD).toFixed(2)
      break;

    case "CAD":
      return (usd_value / CADtoUSD).toFixed(2)
      break;

    case "ARS":
      return (usd_value / ARStoUSD).toFixed(2)
      break;

    case "GBP":
      return (usd_value / GBPtoUSD).toFixed(2)
      break;

    case "EUR":
      return (usd_value / EURtoUSD).toFixed(2)
      break;

    default:
      alert("ERRO INTERNO2. POR NÃO SABER QUE ERA IMPOSSÍVEL, FOI LÁ E SOUBE")
      break;
  }


}

// Obtendo taxas de câmbio e atualizando os valores

function calculadora(input_value = Number(entrada.value), input_type = tipo_entrada.value, output_type = tipo_saida.value) {
  //nossa função 
  // console.log(input_value)
  // console.log("input_type " + typeof input_type)
  // console.log("output_type " + typeof output_type)

  var usdOutput = Number(toUSD(input_value, input_type));

  console.log("usdOutput " + usdOutput)

  console.log(toOutput(usdOutput, output_type))

  var output = Number(toOutput(usdOutput, output_type));

  console.log("output " + output)

  saida.value = output;
}

// OK
entrada.addEventListener('input', () => {
  calculadora()
});

saida.addEventListener('input', () => {
  calculadora()
});

tipo_entrada.addEventListener('change', () => {
  calculadora()
});

tipo_saida.addEventListener('change', () => {
  calculadora()
});

trocar.addEventListener('click', () => {
  const temp = tipo_entrada.value;//Salva o valor da variavel de entrada em uma variavel temporária
  tipo_entrada.value = tipo_saida.value;
  tipo_saida.value = temp;
  calculadora()
});
