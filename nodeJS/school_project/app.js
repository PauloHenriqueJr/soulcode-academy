const express = require("express") //chamando express
const app = express() //estanciando app
const mongoose = require("mongoose") //chamando mongoose
const porta = 3000;// criando variavel para porta

// Conexão ao database mongodb
const database = "mongodb here" //inserir seu acesso mongodb

mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true  }, (err, client) => {
  if (err) return console.log(err);

  db = mongoose.connection;
  console.log("Banco de Dados Conectado");
});


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configurando a view ejs para carregamento
app.set("view engine", "ejs");
app.set("views", __dirname, "/views");

// importando public
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// Importando as rotas
const Router = require('./routes/index');
app.use('/', Router);


app.listen(porta, () => {
  console.log("Servidor ativado na porta " + porta);
});
