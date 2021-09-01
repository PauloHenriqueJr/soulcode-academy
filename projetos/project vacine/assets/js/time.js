
//data e hora
function dataHora() {
  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = (dataAtual.getMonth() + 1);
  var ano = dataAtual.getFullYear();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var seconds = dataAtual.getSeconds();
  $(".time").text(dia + "/" + mes + "/" + ano + " - " + horas + ":" + minutos + ":" + seconds);

};

$(document).ready(() => {
  setInterval(() => {
    $(".time").show(dataHora)
  }, 1000);
})
$("a").fadeIn(3000)//efeito no menu, aplicado display none na unidade respectiva
