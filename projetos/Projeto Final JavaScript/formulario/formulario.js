var get = (x) => document.querySelector(x)
var set = (x) => document.querySelector(x)
var flag_name = false
var flag_cpf = false
var flag_day = false
var flag_month = false
var flag_year = false
var flag_age = false
var flag_email = false
var flag_gender = false

function validaNome(name) {
    if (name.value == "" || !isNaN(name.value)) {
        name.style.backgroundColor = 'rgb(246, 195, 195)';
        flag_name = false;
        return flag_name
    }
    name.style.backgroundColor = 'white';
    flag_name = true;
    return flag_name
}

function validacaoEmail(element) {
    if (element.checkValidity() && element.value != "") {
        element.style.backgroundColor = "white"
        flag_email = true
        return flag_email
    }
    element.style.backgroundColor = "rgb(246, 195, 195)"
    flag_email = false
    return flag_email
}

function validaCPF(element) { //funcao validar cpf
    var cpfNumeros = element.value.replace(".", "").replace(".", "").replace("-", ""); //remove ponto, espacos e traco do cpf
    var noveDig = cpfNumeros.substr(0, 9); // variavel para receber os 9 digitos →111222333←44
    var dezDig = cpfNumeros.substr(0, 10); //variavel para receber 10 digitos →1112223334←4
    var somaNove = 0; //soma dos 9 digitos
    var somaDez = 0; // soma dos 10 digitos

    //VALIDAR PRIMERO DIGITO 111.222.333-→4←4
    // PASSO1: fazer a multiplicacao e soma dos 9 digitos
    // Exemplo:
    //           3   2   5  .  6   5   4  .  2   6   5  -  x   y
    //          10   9   8     7   6   5     4   3   2
    //           _________________________________________
    //somaNove= 30 +18+ 40  + 42 +30 +20  +  8 + 18 +10
    var multiplicador = 10; // multiplicador dos 9 digitos
    for (i = 0; i < 9; i++) {
        var numero = noveDig.substr(i, 1)
        somaNove += numero * multiplicador
        multiplicador--
    }

    // PASSO2: pegar o resto da divisão por 11 de somaNove*10
    var resultadoMod1 = (x = ((somaNove * 10) % 11)) => (x == 10) ? 0 : x

    //VALIDAR SEGUNDO DIGITO 111.→222←.333-44
    // PASSO1: fazer a multiplicacao e soma dos 10 (9 NUMEROS + PRIMEIRO VERIFICADOR(111.222.333-4→4←)) digitos
    // Exemplo:
    //           3   2   5  .  6   5   4  .  2   6   5  -  1   y
    //          11  10   9     8   7   6     5   4   3     2
    //           _________________________________________
    //somaDez= 30 +18+ 40  + 42 +30 +20  +  8 + 18 +10 +  2
    multiplicador = 11 // multiplicado dos 10 digitos
    for (i = 0; i < 10; i++) {
        var numero = dezDig.substr(i, 1)
        somaDez += numero * multiplicador
        multiplicador--
    }

    // PASSO2: pegar o resto da divisão por 11 de somaDez*10
    var resultadoMod2 = (x = ((somaDez * 10) % 11)) => (x == 10) ? 0 : x

    // Metodo do colega Everto Jorge
    // for (let i = 0; i < 9; i++) {
    //     if (teste === `${i}${i}${i}${i}${i}${i}${i}${i}${i}`) {
    //         alert("ok")
    //         break;
    //     }
    // }

    //000.000.000-00, 111.111.111-11, 222.222.222-222, ..., 999.999.999-99
    var first = cpfNumeros.slice(0, 3)  //pega do primeiro ao terceiro numero do cpf
    var second = cpfNumeros.slice(3, 6) //pega do quarto ao sexto digito numero do cpf
    var third = cpfNumeros.slice(6, 9)  //pega do setimo ao nono digito numero do cpf
    //Verifica de é um caso de excessão. Se for retorna true                                
    var verifyExeption = () => (first == second && second == third) ? true : false

    //Verifica se é excessão e se não for, verifica os digitos de validação do sistema de CPF 
    if (!verifyExeption() && (resultadoMod1().toString() + resultadoMod2().toString()) === cpfNumeros.substr(9, 2)) {
        element.style.backgroundColor = "white";
        flag_cpf = true
        return flag_cpf
    }
    element.style.backgroundColor = "rgb(246, 195, 195)";
    flag_cpf = false
    return flag_cpf

}

// Validação genérica para campo vazio
function valida(element) {
    if (element.value == "") { //Verifica se o valor do elemento passado é nulo
        element.style.backgroundColor = "rgb(246, 195, 195)";//Se for nulo muda o background para vermelho 
        return false; //retorna false
    }
    element.style.backgroundColor = "white";//Se não for nulo muda o background para branco
    return true;//retorna true
}

function validaDia(element) { //Validação do campo dia
    if (valida(element)) { //Passar o campo dia para a funçao que valida o valor não nulo
        flag_day = true; //Se não for nulo flag_day fica true
        return flag_day; //Retorna flag_day (true)
    }
    flag_day = false; //Se for nulo flag_day fica false
    return flag_day; //Retorna flag_day (false)
}

//Mesma lógica do validaDia()
function validaMes(element) {
    if (valida(element)) {
        flag_month = true;
        return flag_month;
    }
    flag_month = false;
    return flag_month;
}

//Mesma lógica do validaDia()
function validaGenero(element) {
    if (valida(element)) {
        flag_gender = true;
        return flag_gender;
    }
    flag_gender = false;
    return flag_gender;
}

function validaAno() {
    var ref_var = new Date();//Cria objeto do tipo date
    if (year.value >= ref_var.getFullYear() || year.value < ref_var.getFullYear() - 131) { // Verifica futuro e limite de 130
        year.style.backgroundColor = "rgb(246, 195, 195)";
        alert("Ano invalido")
        flag_year = false;
        return flag_year;
    }
    year.style.backgroundColor = "white";
    flag_year = true;
    return flag_year;
}

function calculateAge() {
    var ref_var = new Date(2021, 3, 16)//Cria um objeto do tipo Date e define a data como 2021/03/16 (Y/M/D)
    var day = get("#day").value //Pega o value do campo day
    var month = get("#month").value//Pega o value do campo month
    var year = get("#year").value //Pega o value do campo year
    var birth = new Date(year, month, day);//Cria um objeto do tipo Date com a data de nascimento


    var age = ref_var.getFullYear() - birth.getFullYear();
     //Subtrai os anos e gera a idade 131
    var m = ref_var.getMonth() - birth.getMonth(); //Subtrai o mes de aniversário com o mes atual (2021/03/16)
    if (m < 0 || (m == 0 && ref_var.getDate() < birth.getDate())) {
        //Verifica se ja passamos do mes de aniversário e se estiver no mesmo mes, vai verificar o dia.
        age--;
    }
    if (age > 130 || age < 0) { //Verifica se a idade inserida é válida (Não pode ter mais que 130 anos de idade)
        alert("Idade inválida! Verifique sua data de nascimento e tente novamente.")
        flag_age = false
        return age
    }
    flag_age = true
    return age
}

//função para aparecer a div de boasvindas
function mostra(event) {
    var age = calculateAge()
    event.preventDefault()// Previne que a pagina seja atualizada por um evento do form
    if (flag_name && flag_cpf && flag_day && flag_month && flag_email && flag_gender && flag_age) {
        //Ferifica se todas as flags, ou seja, todos os campos e a idade estão validados. Se foram validados
        //e estão válidos, logo podemos inserir a dic de boas vindas no corpo da página HTML 
        set("#bem-vindo").innerHTML = `
        <p>
        Olá ${get("#name").value.toUpperCase()}!<br><br>
        Seu login é: ${get("#email").value}.<br>
        Você tem ${age} e se indentifica como uma pessoa do genero ${get("#gender").value}</br> e pode usar seu CPF (${get("#cpf").value}) como senha.
        </p>
        `//Insere uma tag <p>mensagem_de_boas_vindas</p> na página
        return true
    }
    console.log("NOP")
    return false
}


function resetFlags() {
    console.log("resetou")
    flag_name = false
    flag_cpf = false
    flag_day = false
    flag_month = false
    flag_year = false
    flag_email = false
    flag_gender = false
    set("#bem-vindo").innerHTML = ""
}