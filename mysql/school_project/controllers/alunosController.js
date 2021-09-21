// const mongoose = require("mongoose"); //chamando mongoose
const Aluno = require("../models/alunosModel"); //chamando models

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "user",
  database: "escola3"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// Lista de aluno
exports.listar = (req, res) => {
  var my_query = "SELECT * FROM ALUNO";
  con.query,(my_query,(err, resultado) => {
    if (err) return console.log(err);

    res.render("views/pages/alunos.ejs", { dados_aluno: resultado });
  });
};

// Cadastrar novo aluno
exports.cadastrarGet = (req, res) => {
  res.render("views/pages/alunosCadastrar.ejs");
};
//condições para cadastro e uso de async com await para aguardar consolidação de cadastro
exports.cadastrarPOST = async (req, res) => {
  try {
    const aluno = new Aluno (req.body);
    await aluno.save();
    res.redirect("alunos");
  } catch (err) {
    return res.status(400).send({err: "Falha no cadastro"});
  }

  var sql = "INSERT INTO aluno (matricula, nome, email, cpf, rg, endereco, telefone) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("aluno cadastrado");
  });
};

// Editar dados do aluno
exports.editarGet = async (req, res) => {
  try {
  const resultado = await Aluno.findById(req.params.id);
  res.render("views/pages/alunosEditar.ejs", {dados: resultado});
  } catch (err) {
    res.send(err);
  }
};

exports.editarPOST = async (req, res) => {
  try {
    await Aluno.findOneAndReplace({_id: req.params.id},{ ...req.body });
    res.redirect("alunos");
  } catch (err) {
    return console.log(err);
  }
};

// Apagar dados do aluno
exports.apagar = async (req, res) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id);
    res.redirect("alunos");
  } catch (err) {
    return console.log(err);
  }
};


//uso de função async e await é uma forma de trabalhar com funções assincronas em javascript
//resumindo, para não perder tempo, falamos. Express espere o banco de dados retornar, espere aqui