$(document).ready(function(){

    $("#btn0").click(function(){
    $("div").hide(500);
    })

    $("#btn1").click(function(){
    $("div").show(300);
    })

    $("#btn2").click(function(){
        $("div").toggle(300);
    })

    $("#btn3").click(function(){
        $("div").fadeIn(300);
    })

    $("#btn4").click(function(){
        $("div").fadeOut(300);
    })

    $("#btn5").click(function(){
        $("div").fadeTo(300, 0.5);
    })

    $("#btnR").click(function(){
        $("div").fadeTo(300, 1);
    })

    $("#btn6").click(function(){
        $("div").fadeToggle(300);
    })

    $("#btn7").click(function(){
        $("div").slideUp(300);
    })

    $("#btn8").click(function(){
        $("div").slideDown(300);
    })

    $("#btn9").click(function(){
        $("div").slideToggle(300);
    })

});