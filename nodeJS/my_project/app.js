const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000

// Conexão ao database mongodb
const database = "mongodb here" //inserir seu acesso mongodb

mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true  }, (err, client) => {
    if (err) return console.log(err);
  
    db = mongoose.connection;
    console.log("Banco de Dados Conectado");
  });

// configurando a view ejs para carregamento
app.set("view engine", "ejs");
app.set("views", __dirname, "/views");

const path = require('path');//criando variavel pra uso
app.use(express.static(path.join(__dirname, 'public')));


// Middlewares
app.use(express.urlencoded({extended: true}));//fluxe
app.use(express.json()); //type json


// Importa as Routes
const Router = require('./routes/index');
app.use("/", Router);


app.listen(port, () => {
    console.log("Servidor rodando na porta", +port);

});