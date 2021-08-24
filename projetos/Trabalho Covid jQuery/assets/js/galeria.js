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
  
    $("a").fadeIn(3000)//efeito no menu, aplicado display none na unidade respectiva
  });