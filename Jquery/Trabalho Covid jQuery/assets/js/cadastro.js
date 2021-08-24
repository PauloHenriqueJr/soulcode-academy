// #region Validações
// PROGRESS BAR


var cont = new Array();
cont[0] = 0;
cont[1] = 0;
cont[2] = 0;
cont[3] = 0;
cont[4] = 0;
cont[5] = 0;
cont[6] = 0;
cont[7] = 0;
cont[8] = 0;
cont[9] = 0;
cont[10] = 0;

function contador() {
    var soma = 0;
    for (let i = 0; i < cont.length; i++) {
        soma += cont[i];
    }
    soma = soma * 10
    return soma
}

// A função abaixo atualiza a barra de progresso à cada 1seg.
$(document).ready(function () {
    var barraProgresso = 0;
    var handler = function () {
        barraProgresso = contador();
        $("#progressbar").progressbar({
            value: barraProgresso
        });
    }

    setInterval(handler, 1000)
})

//0
function valida_nome(x) {

    var nome = x.value
    if (isNaN(nome)) {
        x.style.border = "2px solid green"
        cont[0] = 1
        return true;
    }

    else {
        cont[0] = 0
        x.style.border = "2px solid red"
        return false;
    }

}
//1
function valida_cpf(x) {
    var cpf_valor = x.value;

    if (cpf_valor.length == 14) {
        x.style.border = "2px solid green"
        cont[1] = 1

        return true;
    }

    else {
        cont[1] = 0


        x.style.border = "2px solid red"
        return false;
    }
}
//2
function valida_telefone(x) {
    if (x.value == "" || (x.value).length < 15) {
        x.style.border = "2px solid red"
        cont[2] = 0

        return false;
    }
    else {
        cont[0] = 1
        x.style.border = "2px solid green"
        return true;
    }
}

//3
function valida_idade(x) {
    var idade = calculaIdade(x.value);
    if (idade > 130 || idade == " " || idade <= 0) {
        x.style.border = "2px solid red"
        cont[3] = 0
        return false;
    } else {
        cont[3] = 1
        x.style.border = "2px solid green"
        return true;
    }
}
//4
function valida_profissao(x) {
    if (x.value == "") {
        cont[4] = 0
        x.style.border = "2px solid red"
        return false;
    }
    else {
        cont[4] = 1
        x.style.border = "2px solid green"
        return true;
    }
}
//5
function valida_etnia(x) {
    if (x.value == "") {
        cont[5] = 0
        x.style.border = "2px solid red"
        return false;
    }
    else {
        cont[5] = 1
        x.style.border = "2px solid green"
        return true;
    }
}
//6
function valida_email(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {

        cont[6] = 1
        field.style.border = "2px solid green"
        return true;
    }
    else {
        cont[6] = 0
        field.style.border = "2px solid red"
        return false;
    }
}
//7
function valida_sexo(x) {
    if (x.value == "") {
        cont[7] = 0
        x.style.border = "2px solid red"
        return false;
    }
    else {
        cont[7] = 1
        x.style.border = "2px solid green"
        return true;
    }
}
//8
function valida_cartao_sus(x) {
    if (x.value == "") {
        cont[8] = 0
        x.style.border = "2px solid red"
        return false;
    }
    else {
        cont[8] = 1
        x.style.border = "2px solid green"
        return true;
    }
}
//9
function valida_peso(x) {
    if (x.value == "") {
        cont[9] = 0
        x.style.border = "2px solid red"
        return false;
    }
    else {
        cont[9] = 1
        x.style.border = "2px solid green"
        return true;
    }
}

function valida_altura(x) {
    if (x.value == "") {
        cont[10] = 0
        x.style.border = "2px solid red"
        return false;
    }
    else {
        cont[10] = 1
        x.style.border = "2px solid green"
        return true;
    }
}



// #region Máscaras e Cálculos

// INICIO FUNÇÃO DE MASCARA MAIUSCULA
function maiuscula(x) {
    v = (x.value.toUpperCase());
    x.value = v;

}
//FIM DA FUNÇÃO MASCARA MAIUSCULA


//Mascara telefone

$(function () {
    $("#telefone").mask("(00) 00000-0000");
    $("#cartao_sus").mask("0000.0000.0000.0000");
    $("#altura").mask("0.00");
    $("#peso").mask("000.00", { reverse: true });
})

//Função para exibir "Balões no formulário".
$(function () {
    var tooltips = $("[title]").tooltip({
        position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
        }
    });
})


// Máscara para o CPF
function fMasc(objeto, mascara) {
    obj = objeto;
    masc = mascara;
    setTimeout("fMascEx()", 1);
}

function fMascEx() {
    obj.value = masc(obj.value);
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf;
}

var idade_vac = 0;
// Cálculo da idade
function calculaIdade(dataNasc) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('-');
    var anoNasc = anoNascParts[0];
    var mesNasc = anoNascParts[1];
    var diaNasc = anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1;
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
    if (mesAtual < mesNasc) {
        idade--;
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--;
            }
        }
    }
    idade_vac = idade
    return idade;
}



// Cálculo do IMC
function calculaImc(peso, altura) {
    var imc = peso / (altura ** 2);
    return imc.toFixed(2)

}

// #endregion

// #endregion


$(document).ready(function () {

    // Função para mostrar ou esconder a guia gravidez
    $("#form_gestante").hide();
    $("#sexo").on({
        "mouseup": function () {
            var sex = $('#sexo option:selected').val();
            if (sex == "Masculino" || sex == "") {
                $("#form_gestante").hide();
            }
            else {
                $("#form_gestante").fadeIn();
            }

        }

    })

    $("#comorbidade_alergia").hide();
    $('input[name="comorb_alerg"]').on({
        "change": function () {
            var com = Array.from(document.getElementsByName("comorb_alerg")).find(r => r.checked);
            if (com.id == "sim") {
                $("#comorbidade_alergia").fadeToggle();
            }
            else {
                $("#comorbidade_alergia").fadeToggle();
            }

        }

    })
})

//PROFISSÃO auto complete
$(function () {
    var availableTags = [
        "Auxiliar de Saúde Bucal",
        "Auxiliar de Enfermagem",
        "Assistente Social",
        "Biólogo",
        "Biomédico",
        "Enfermeiro",
        "Farmacêutico",
        "Fisioterapeuta",
        "Fonoaudiólogo",
        "Médico",
        "Nutricionista",
        "Odontólogo",
        "Outros",
        "Psicólogo",
        "Profissional de Educação Física",
        "Técnico de Saúde Bucal",
        "Técnico de Enfermagem",
        "Técnico de Farmácia",
        "Técnico de Laboratório",
        "Terapeuta Ocupacional",
        "Veterinário"
    ];
    $("#profissao").autocomplete({
        source: availableTags
    });
});

class Pessoa { //classe pessoa, todos os objetos pessoa seguirão esse modelo 

    constructor() {
        this.nome = ""; //no objeto pessoa(i) todos os this.variável vão receber o parametro na ordem do construtor 
        this.email = "";
        this.data_nascimento = "";
        this.cpf = "";
        this.sexo = "";
        this.idade = "";
        this.etnia = "";
        this.gravidez = "";
        this.profissao = "";
        this.cartao_sus = "";
        this.peso = "";
        this.altura = "";
        this.imc = ""
        this.comorbidades = new Array();
        this.alergias = new Array();
        this.vacinas = new Array();
        this.contemplado = "";
    }


    //Ola (nome ) , seu login é (email) , você tem (idade) se define como uma pessoa do sexo(sexo) e pode usar (CPF) como senha"
    mostrar_dados() {
        // return this.nome + " " + this.email + " " + this.data_nascimento + " " + this.cpf + " " + this.sexo + " " + this.idade
        // return `<h3>Olá ${this.nome},<h3><br>
        // <p>Seu login é ${this.email}, você tem ${this.idade} anos de idade, se define como uma pessoa ${this.sexo} e pode usar ${this.cpf} como senha. ${this.gravidez}</p>`
        return `
        
        Nome: ${this.nome}<br>
        Cpf: ${this.cpf}<br>
        Telefone: ${this.telefone}<br>
        Data: ${this.data_nascimento}<br>
        Idade: ${this.idade}<br>
        Profissao: ${this.profissao}<br>
        Etnia: ${this.etnia}<br>
        Email: ${this.email}<br>
        Sexo: ${this.sexo}<br>
        Grávidez: ${this.gravidez}<br>
        Cartão SUS: ${this.cartao_sus}<br>
        Peso: ${this.peso}<br>
        Altura: ${this.altura}<br>
        IMC: ${this.imc}<br>
        Comorb: ${this.comorbidades}<br>
        Alerg: ${this.alergias}<br>
        Vacinas: ${this.vacinas}<br>
        Contemplado: ${this.contemplado}<br>

        
        `
    }

}

function enviar_dados() {
    var nome_input = document.getElementById("nome"); //está recebendo dados do input
    var cpf_input = document.getElementById("cpf");
    var telefone_input = document.getElementById("telefone");
    var data_nascimento_input = document.getElementById("data_nascimento");
    var profissao_input = document.getElementById("profissao");
    var etnia_input = document.getElementById("etnia");
    var email_input = document.getElementById("email");
    var sexo_input = document.getElementById("sexo");
    var gravidez_input = Array.from(document.getElementsByName("gestante")).find(r => r.checked);
    var cartao_sus_input = document.getElementById("cartao_sus");
    var peso_input = document.getElementById("peso");
    var altura_input = document.getElementById("altura");

    var formValido = true;

    //validando todos os dados do input segundo as funções valida

    if (!valida_nome(nome_input)) {
        formValido = false;
    }

    if (!valida_cpf(cpf_input)) {
        formValido = false;
    }

    if (!valida_telefone(telefone_input)) {
        formValido = false;
    }

    if (!valida_idade(data_nascimento_input)) {
        formValido = false;
    }


    if (!valida_email(email_input)) {
        formValido = false;
    }

    if (!valida_sexo(sexo_input)) {
        formValido = false;
    }

    if (!valida_etnia(etnia_input)) {
        formValido = false;
    }

    if (!valida_profissao(profissao_input)) {
        formValido = false;
    }

    if (!valida_cartao_sus(cartao_sus_input)) {
        formValido = false;
    }
    if (!valida_peso(peso_input)) {
        formValido = false;
    }
    if (!valida_altura(altura_input)) {
        formValido = false;
    }

    function valida_vacina() {
        var idade = idade_vac;

        if (idade >= 16) {
            return "Apto à vacinar"
        } else {
            return "Não apto à vacinar"
        }
    }


    //se qualquer erro retorna falso e não envia o form

    if (!formValido) {
        //Função UI para caixa de diálogo.
        $(function () {
            $("#dialog").dialog();
        });

        // document.getElementById("print").innerHTML = "<h3>Dados Inválidos!</h3><br><p>Por favor, verifique os campos em vermelho e tente novamente.</p>"
        return formValido;
    }
    else {
        //mostrar div  do form válido em verde com os dados da pessoa
        var nome = nome_input.value.toUpperCase();
        var cpf = cpf_input.value;
        var telefone = telefone_input.value
        var data_nascimento = new Date(data_nascimento_input.value);
        var idade = calculaIdade(data_nascimento_input.value);
        var profissao = profissao_input.value
        var etnia = etnia_input.value;
        var email = email_input.value;
        var sexo = sexo_input.value;
        var gravidez = gravidez_input.value;
        var cartao_sus = cartao_sus_input.value;
        var peso = peso_input.value;
        var altura = altura_input.value
        var imc = calculaImc(peso_input.value, altura_input.value)
        var contemplado = valida_vacina();

        //variavél novo objeto - pessoa_1 está recebendo uma instância da classe pessoa tornando-se um objeto  (pessoa_1.nome, pessoa_1.email, etcccc)     
        var pessoa_1 = new Pessoa();

        pessoa_1.nome = nome;
        pessoa_1.cpf = cpf;
        pessoa_1.telefone = telefone;
        pessoa_1.email = email;
        pessoa_1.data_nascimento = `${data_nascimento.getDate()}/${data_nascimento.getMonth() + 1}/${data_nascimento.getFullYear()}`;
        pessoa_1.idade = idade;
        pessoa_1.sexo = sexo;
        pessoa_1.etnia = etnia;
        pessoa_1.gravidez = gravidez;
        pessoa_1.profissao = profissao;
        pessoa_1.alergias = Array.from(document.getElementsByName("alergias")).filter(r => r.checked).map(r => r.id);
        pessoa_1.comorbidades = Array.from(document.getElementsByName("comorbidades")).filter(r => r.checked).map(r => r.id);
        pessoa_1.vacinas = Array.from(document.getElementsByName("vacinas")).filter(r => r.checked).map(r => r.id);
        pessoa_1.cartao_sus = cartao_sus;
        pessoa_1.peso = peso;
        pessoa_1.altura = altura;
        pessoa_1.imc = imc;
        pessoa_1.contemplado = contemplado;

        document.getElementById("center").innerHTML = pessoa_1.mostrar_dados(); //imprimindo os dados se tudo estiver correto 
        return true;
    }
}