var http = require("http");

// Cria um servidor HTTP e uma escuta de requisições para a porta 8000
http.createServer((req, res) => {

   // Configura o cabeçalho da resposta com um status HTTP e um Tipo de Conteúdo
   res.writeHead(200, {'Content-Type': 'text/plain'});

   //Envia a resposta do body"
   res.end('Obrigado por olhar o meu codigo\n' );

}).listen(8000);

// Imprime no console a URL de acesso ao servidor
console.log('Servidor executando na porta 8000');