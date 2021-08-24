//tabs below

$(function () {
  $("#tabs").tabs();
});

//accordion below

$(function () {
  $("#accordion").accordion();
});

//slide below

$(document).ready(function () {
  $("#slideshow div:gt(0)").hide();
  // gt(0) é pra pegar o indice 0
  setInterval(function () {
      $('#slideshow  div:first')
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo('#slideshow');
  }, 3000);

  $("#slideshow").show(2000)//efeito no slide, aplicado display none na unidade respectiva
  $("a").fadeIn(3000)//efeito no menu, aplicado display none na unidade respectiva
});


