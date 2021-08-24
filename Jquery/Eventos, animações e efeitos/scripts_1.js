$(document).ready(function(){
    $("#btn1").click(function(){
        $("#box1").css("background","black").width(50).height(20)
        $("#box2").css("background","red").width(30).height(40)
        $("#box3").css("background","blue").width(15).height(10)
        $("#box4").css("background","orange").width(50).height(20)
        $("#box5").css("background","green").width(60).height(60)
    })
    
    $("#btn2").click(function(){
        $("#box1").css("background","blue").width(300).height(150)
        $("#box2").css("background","blue").width(300).height(150)
        $("#box3").css("background","blue").width(300).height(150)
        $("#box4").css("background","blue").width(300).height(150)
        $("#box5").css("background","blue").width(300).height(150)
    })    

    $("#btn3").dblclick(function(){
        $("#box1").fadeOut(2000)
        $("#box4").fadeOut(2000)
    })  
    
    $("#name").focusin(function(){
        $("#name").css("background","rgba(147,254,142)")
    })
    $("#name").focusout(function(){
        $("#name").css("background","rgba(255,255,255)")
    })

    $("#cpf").focusin(function(){
        $("#cpf").css("background","rgba(147,254,142)")
    })
    $("#cpf").focusout(function(){
        $("#cpf").css("background","rgba(255,255,255)")
    })
    
    $("#adress").focusin(function(){
        $("#adress").css("background","rgba(147,254,142)")
    })
    $("#adress").focusout(function(){
        $("#adress").css("background","rgba(255,255,255)")
    })

    $("#email").focusin(function(){
        $("#email").css("background","rgba(147,254,142)")
    })
    $("#email").focusout(function(){
        $("#email").css("background","rgba(255,255,255)")
    })

    $("#tel").focusin(function(){
        $("#tel").css("background","rgba(147,254,142)")
    })
    $("#tel").focusout(function(){
        $("#tel").css("background","rgba(255,255,255)")
    })

    $("select").focusin(function(){
        $("select").css("background","rgba(147,254,142)")
    })
    $("select").focusout(function(){
        $("select").css("background","rgba(255,255,255)")
    })


    $("#enviar").click(function(){
        var nome = $("#name").val();
        var email = $("#email").val();
        $("span").html("Seu nome é: "+ nome + "</br>" + "Seu email é: "+ email);
    })
});