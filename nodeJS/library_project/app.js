const express = require("express");
const app = express();
const mongoose = require("mongoose");
const porta = 3000;


// Conexão ao database mongodb
const database = "mongodb+srv://paulo_henrique:paulo_henrique@cluster0.kypul.mongodb.net/library?retryWrites=true&w=majority" //inserir seu acesso mongodb

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

// importando public
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Importando as rotas
const Router = require('./routes/index');
app.use('/', Router);


app.listen(porta, () => {
  console.log("Servidor ativado na porta " + porta);
});
