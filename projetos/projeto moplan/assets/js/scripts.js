//Start function Jquery scroll 400px 

    $(window).scroll((function(){
    
        if ($(window).scrollTop() > 400) {
            $('.scroll-to-top').show();
        } else {
            $('.scroll-to-top').hide();
        }

}));

//End function Jquery scroll 400px 


//Start form validation 

function nameValidation(){
    let name = document.getElementById("name").value;
    if(name == "" || !(isNaN(name)) || name.length < 4 || name.length >40){        
        document.getElementById("name").style.backgroundColor = "rgb(246, 195, 195)";
    } 
    else {        
        document.getElementById("name").style.backgroundColor = "white";
    }

} 

function emailValidation(field){
   let usuario = field.value.substring(0, field.value.indexOf('@')); 
   let dominio = field.value.substring(
      field.value.indexOf('@') + 1, 
      field.value.length
    );
    if (
      usuario.length >= 1 && 
      dominio.length >= 3 &&
      usuario.search('@') == -1 &&
      dominio.search('@') == -1 &&
      usuario.search(' ') == -1 &&
      dominio.search(' ') == -1 &&
      dominio.search('.') != -1 &&
      dominio.indexOf('.') >= 1 &&
      dominio.lastIndexOf('.') < dominio.length - 1 
    ) {
        document.getElementById("email").style.backgroundColor = "white";
    } else {
        document.getElementById("email").style.backgroundColor = "rgb(246, 195, 195)";
    }

}

function phoneValidation(){
    let number = document.getElementById("phone").value;
    if(number == "" || number.length < 10 || number.length > 11 || isNaN(number)){
        document.getElementById("phone").style.backgroundColor = "rgb(246, 195, 195)";
    }else{
        document.getElementById("phone").style.backgroundColor = "white";
    }

}

//End form validation 







