// O require importa o modulo
const express = require("express")
const app = express();
const port = 8000


// Define o que acontece na root
app.get("/", (req, res) => {
  // Resposta da rota
 res.end('Obrigado por olhar o meu codigo\n');
})


// Inicia o Servidor na porta 8000
app.listen(port, () => (console.log("Funcionando na porta 8000")))