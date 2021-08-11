/*

1) Crie um programa que tenha um botão em html que ao ser 
clicado acesse uma função que peça para o usuário digitar
    um numero N que seja maior que 0 e menor que 10 que 
    corresponderá a quantidade de números do Array, que serão
    temperaturas. Em seguida, leia também um número M que 
    seja maior que 0 e menor que 10 que corresponderá a quantidade
    de nomes que serão inseridos em um outro Array. 
    Em seguida, utilizando o prompt de comando, receba a quantidade N de
    temperaturas e armazene no Array. Utilize o prompt para receber quantidade M de nomes 
    e armazene no outro vetor. Ao
    final, siga as instruções abaixo:

    • Verifique se no vetor de nomes existe o nome “Eliana”
    • Exiba na tela as temperaturas maiores que 20.
    • Exiba a posição do nome “Carlos” caso exista. Caso não exista, informe ao usuário.
    • Exiba o cubo dos números do Array de números. 

    */

    var inserirTemperatura = inserirNome = 0;
    var temperaturas = [];
    var nomes = [];
    
    
    
    function clicarBotao(){    
        var inserirTemperatura = parseInt(prompt("Digite a quantidade (de 0 a 10) de temperaturas a serem inseridas"));
        var inserirNome = prompt("Digite a quantidade (de 0 a 10) de nomes a serem inseridas");
    
        for (i = 0; i < inserirTemperatura; i++){
            temperaturas[i] = (parseInt(prompt("Digite valores de temperaturas")));
        }
        for (i=0; i <inserirNome; i++){
            nomes[i] = prompt("Digite os nomes");
        }
        document.write("As temperaturas válidas foram: " ,temperaturas.filter(elemento => elemento > 20), ". <br>");
    
        var verificarNome = nomes.some(elementos => elementos === "Eliana");
        console.log(verificarNome);
        
        if(nomes.some(nome => nome === "Carlos")){
            document.write("A posição do nome Carlos foi: " ,nomes.findIndex(nome => nome === "Carlos"), ". <br>");
        }else{
            document.write("O nome Carlos não existe na lista. <br>");
        }
    
        temperaturas.forEach(elemento => {
            document.write("O valor da temperatura ao cubo é: " ,Math.pow(elemento, 3), ". <br>")        
        });      
    }
