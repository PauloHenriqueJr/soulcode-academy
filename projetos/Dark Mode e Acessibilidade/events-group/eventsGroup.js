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

function validaIdade() {
    var idade = formulario.idade;
    if (idade.value == '' || isNaN(idade.value) ||parseInt(idade.value) < 0 || parseInt(idade.value) > 150) {
        alert('Informe uma idade válida')

        idade.style.backgroundColor = 'rgb(246, 195, 195)';

        idade.placeholder = 'Informe uma idade válida.'

    } else if (parseInt(idade.value) > 0 && parseInt(idade.value) < 150) {

        idade.style.backgroundColor = 'rgb(206, 243, 194)';

    }
}

function aumentaImagem() {
    document.getElementById('garrafas-cerveja').style.width = "90%";
}

function diminuiImagem() {
    document.getElementById('garrafas-cerveja').style.width = "85%";
}

function moveIcone() {
    document.getElementById('face').style.transform = "translateX(10px)";
    // document.getElementById('face').style.boxShadow = "5px 5px 5px rgba(50,50,50,0.6)";
    document.getElementById('insta').style.transform = "translateX(10px)";
    // document.getElementById('insta').style.boxShadow = "5px 5px 5px rgba(50,50,50,0.6)";
}

function voltaIcone() {
    document.getElementById('face').style.transform = "translateY(10px)";
    // document.getElementById('face').style.boxShadow = "5px 5px 5px rgba(50,50,50,0.6)";
    document.getElementById('insta').style.transform = "translateY(10px)";
    // document.getElementById('insta').style.boxShadow = "5px 5px 5px rgba(50,50,50,0.6)";
}



