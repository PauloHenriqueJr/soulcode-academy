const express = require("express") //chamando express
const app = express() //estanciando app
const mongoose = require("mongoose") //chamando mongoose
const porta = 3000;// criando variavel para porta
const passport = require('passport');
const session = require('express-session');



// Conexão ao database mongodb
const database = "mongodb+srv://paulo_henrique:paulo_henrique@cluster0.kypul.mongodb.net/library?retryWrites=true&w=majority" //inserir seu acesso mongodb

mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true  }, (err, client) => {
  if (err) return console.log(err);

  db = mongoose.connection;
  console.log("Banco de Dados Conectado");
});


require('./auth')(passport);
app.use(session({  
  secret: '123',//configure um segredo seu aqui,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 60 * 1000 }//30min
}))
app.use(passport.initialize());
app.use(passport.session());


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configurando a view ejs para carregamento
app.set("view engine", "ejs");

// importando public
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//
app.use('/login', loginRouter);
app.use('/users', authenticationMiddleware, usersRouter);
app.use('/', authenticationMiddleware,  indexRouter);

// Importando as rotas
const Router = require('./routes/index');
app.use('/', Router);

const loginRouter = require('./routes/login');
app.use('/login', loginRouter);


app.listen(porta, () => {
  console.log("Servidor ativado na porta " + porta);
});
