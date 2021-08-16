
//aparecer os botoes de cientifica
var flag_cientifica = 0;
function cientifica() {
    var hidden = document.getElementsByClassName("hidden");

    if (flag_cientifica == "0") {
        for (let i = 0; i < hidden.length; i++)
            hidden[i].style.visibility = "visible"
        flag_cientifica = 1;
    } else {
        for (let i = 0; i < hidden.length; i++)
            hidden[i].style.visibility = "hidden"
        flag_cientifica = 0;
    }
}

// incerir os numeros e operaçoes na div
function insert(num) {
    var numero = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = numero + num;
}


//apagar toda a div
function clean() {
    document.getElementById("display").innerHTML = " ";
}
//apagar elemento um a um na div
function back() {
    var apag = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = apag.substring(0, apag.length - 1);
}



//realiza o calculo do que foi escrito na div
function calcular() {
    var resultado = document.getElementById("display").innerHTML;
    if (resultado) {
        document.getElementById("display").innerHTML = eval(resultado)
    }
}
//modo escuro
function modoEscuro() {
    document.body.style.backgroundColor = "#212529";
    document.getElementById("display").style.color = "white"
}
//modo claro
function modoClaro() {
    document.body.style.backgroundColor = "transparent";
    document.getElementById("display").style.color = "black"
}
// calcuro da raiz quadrada
function raiz() {
    var raiz = document.getElementById("display").innerHTML;
    if (raiz) {
        document.getElementById("display").innerHTML = Math.sqrt(raiz);
    }
}
// ivertr numero para positivo e negativo
function inverte(num) {
    var numero = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = numero * (-1);
}
