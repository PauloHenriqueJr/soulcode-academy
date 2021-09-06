const mongoose = require("mongoose"); //chamando mongoose
const Livro = require("../models/livro"); //chamando models

// Lista de livro
exports.listar = (req, res) => {
  Livro.find((err, resultado) => {
    if (err) return console.log(err);

    res.render("livros.ejs", { dados_livro: resultado });
  });
};

// Cadastrar novo livro
exports.cadastrar = (req, res) => {
  res.render("livrosnovo.ejs");
};
//condições para cadastro e uso de async com await para aguardar consolidação de cadastro
exports.cadastrarPOST = async (req, res) => {
  try {
    const livro = new Livro (req.body);
    await livro.save();
    res.redirect("/livros");
  } catch (err) {
    return res.status(400).send({err: "Falha no cadastro"});
  }
};

// Editar dados do livro
exports.editar = async (req, res) => {
  try {
  const resultado = await Livro.findById(req.params.id);
  res.render("livroseditar.ejs", {dados: resultado});
  } catch (err) {
    res.send(err);
  }
};

exports.editarPOST = async (req, res) => {
  try {
    await Livro.findOneAndReplace({_id: req.params.id},{ ...req.body });
    res.redirect("/livros");
  } catch (err) {
    return console.log(err);
  }
};

// Apagar dados do livro
exports.apagar = async (req, res) => {
  try {
    await Livro.findByIdAndDelete(req.params.id);
    res.redirect("/livros");
  } catch (err) {
    return console.log(err);
  }
};


//uso de função async e await é uma forma de trabalhar com funções assincronas em javascript
//resumindo, para não perder tempo, falamos. Express espere o banco de dados retornar, espere aqui