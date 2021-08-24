$(function () {
  $("#tabs").tabs();
});

$(function () {
  $("#accordion").accordion();
});

//data e hora
$(document).ready(()=>{
function dataHora() {
  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = (dataAtual.getMonth() + 1);
  var ano = dataAtual.getFullYear();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var seconds = dataAtual.getSeconds();
  $(".time").text("Pagina gerada " + dia + "/" + mes + " de " + ano + " . Agora são exatamente " + horas + ":" + minutos + seconds);
  
};
setInterval(()=>{
  $(".time").show(dataHora)
},3000);
})
