
//validação de login

function validation() {
    let user = document.getElementById('username').value
    let pass = document.getElementById('password').value
    if(user = '' || pass ==''){
        alert("Dados invalidos");
        $('#pegar').attr("href", "#")
    }
    else if (user != "adm" && pass != "adm") {
        alert("Você esta logado como usuario")
        $('#pegar').attr("href", "/livrosusuario")

    } else
        alert("Você esta logado como administrador")
};

