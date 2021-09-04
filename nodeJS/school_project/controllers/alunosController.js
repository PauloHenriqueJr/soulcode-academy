const mongoose = require("mongoose"); //chamando mongoose
const Aluno = require("../models/aluno"); //chamando models

// Lista de aluno
exports.listar = (req, res) => {
  Aluno.find((err, resultado) => {
    if (err) return console.log(err);

    res.render("alunos.ejs", { dados_aluno: resultado });
  });
};

// Cadastrar novo aluno
exports.cadastrar = (req, res) => {
  res.render("alunosnovo.ejs");
};
//condições para cadastro e uso de async com await para aguardar consolidação de cadastro
exports.cadastrarPOST = async (req, res) => {
  try {
    const aluno = new Aluno (req.body);
    await aluno.save();
    res.redirect("/alunos");
  } catch (err) {
    return res.status(400).send({err: "Falha no cadastro"});
  }
};

// Editar dados do aluno
exports.editar = async (req, res) => {
  try {
  const resultado = await Aluno.findById(req.params.id);
  res.render("alunoseditar.ejs", {dados: resultado});
  } catch (err) {
    res.send(err);
  }
};

exports.editarPOST = async (req, res) => {
  try {
    await Aluno.findOneAndReplace({_id: req.params.id},{ ...req.body });
    res.redirect("/alunos");
  } catch (err) {
    return console.log(err);
  }
};

// Apagar dados do aluno
exports.apagar = async (req, res) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id);
    res.redirect("/alunos");
  } catch (err) {
    return console.log(err);
  }
};


//uso de função async e await é uma forma de trabalhar com funções assincronas em javascript
//resumindo, para não perder tempo, falamos. Express espere o banco de dados retornar, espere aqui