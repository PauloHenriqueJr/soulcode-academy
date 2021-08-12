var tamanhoFonte = 100;
var aumentaDiminui = 10;

function onLoad() {

    var botaoAumenta = document.getElementById('botaoAumentaFonte');
    
    var botaoDiminui = document.getElementById('botaoDiminuiFonte');

    var imgGarrafas = document.getElementById('garrafas-cerveja');
    
    
    botaoAumenta.addEventListener('click', function(event) {
        tamanhoFonte = tamanhoFonte + aumentaDiminui;
        document.getElementById('corpo').style.fontSize = tamanhoFonte + aumentaDiminui + '%';
    });
    
    botaoDiminui.addEventListener('click', function(event) {
        tamanhoFonte = tamanhoFonte - aumentaDiminui;
        document.getElementById('corpo').style.fontSize = tamanhoFonte - aumentaDiminui + '%';
    });
}


function modoNoturno() {
    document.getElementById("corpo", "bg-footer").style.color = "white";
    document.getElementById("corpo").style.background = "url(img/bg4.jpg)";
}

function modoClaro() {
    document.getElementById('corpo').style.background = "white";
    document.getElementById('corpo').style.color = "black";
}


function aumentaImagem() {
    document.getElementById('garrafas-cerveja').style.width = "95%";
}

function diminuiImagem() {
    document.getElementById('garrafas-cerveja').style.width = "85%";
}

function moveIcone() {
    document.getElementById('face').style.transform = "translateX(10px)";   
    document.getElementById('insta').style.transform = "translateX(10px)";
}

function voltaIcone() {
    document.getElementById('face').style.transform = "translateY(10px)";    
    document.getElementById('insta').style.transform = "translateY(10px)";
}

function validaNome() {
    var nome = formulario.nome;
    if (nome.value == '' || !isNaN(nome.value)) {

        nome.style.backgroundColor = 'rgb(246, 195, 195)';
        nome.style.borderColor = 'red';
        nome.placeholder = 'Informe um nome válido'

    } else {
        nome.style.backgroundColor = 'rgb(206, 243, 194)';
        nome.style.borderColor = 'green';
    }
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById('email').style.borderColor = 'green';
        document.getElementById('email').style.backgroundColor = 'rgb(206, 243, 194)';
    } else {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.backgroundColor = 'rgb(246, 195, 195)';
        document.getElementById('email').placeholder = 'Informe um email válido';
        alert("E-mail inválido");
    }
}

function validaIdade() {
    var idade = formulario.idade;
    if (idade.value == '' || isNaN(idade.value) || parseInt(idade.value) < 0 || parseInt(idade.value) > 150) {
        // alert('Informe uma idade válida')

        idade.style.backgroundColor = 'rgb(246, 195, 195)';
        idade.placeholder = 'Informe uma idade válida.'
        idade.style.borderColor = 'red';

    } else if (idade.value < 18) {
        alert('Você é menor de idade, nossa Newsletter não é para você.')
        idade.style.backgroundColor = 'rgb(246, 195, 195)';
        idade.style.borderColor = 'red';
    }
       
    else if (parseInt(idade.value) > 0 && parseInt(idade.value) < 150) {

        idade.style.backgroundColor = 'rgb(206, 243, 194)';
        idade.style.borderColor = 'green';
    }
}

