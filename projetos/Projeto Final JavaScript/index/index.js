function dark() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}

window.onload = function () {
    var elementBody = document.querySelector('#body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
};

function invertmode() {
    var body = document.getElementsByTagName("body")
    if (body[0].className == "lightmode") {
        body[0].className = "darkmode"
        // document.getElementsByTagName("li")[0].innerHTML = "Modo claro"
    } else {
        body[0].className = "lightmode"
        // document.getElementsByTagName("li")[0].innerHTML = "Modo escuro"
    }
}
letter_size = 20

function largerLetter() {
    var body = document.getElementsByTagName("body")
    var form_st = document.getElementsByClassName("form_st")
    letter_size++
    body[0].style.fontSize = ` ${letter_size}px `
    for (i = 0; i < form_st.length; i++) form_st[i].style.fontSize = ` ${letter_size}px `

}

function smallerLetter() {
    var body = document.getElementsByTagName("body")
    var form_st = document.getElementsByClassName("form_st")
    letter_size--
    body[0].style.fontSize = ` ${letter_size}px `
    for (i = 0; i < form_st.length; i++) form_st[i].style.fontSize = ` ${letter_size}px `
}

