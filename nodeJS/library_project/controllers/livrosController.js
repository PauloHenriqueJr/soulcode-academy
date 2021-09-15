const express = require("express");
const mongoose = require("mongoose"); //chamando mongoose
const Livro = require("../models/livro"); //chamando models
const User = require("../models/user");//chamando models


//acess login

//register
exports.register = (req,res)=>{
    res.render("register");
};


exports.registerPost = (req, res)=>{
  let user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;

 
  user.save((err, user)=>{
      if(err){
          return res.status(500).send("Erro no cadastro");
      };
      if(user.username == 'adm' || user.password == 'adm'){
          return res.send('Nome de usuario ou senha INVALIDOS');
      };
      return res.redirect("/");
  });
};

//livros para usuarios
exports.livrosusuario = (req, res)=>{
  Livro.find((err, resultado) => {
      if(err)
          return res.status(500).send("Erro ao consultar livro");
      
      return res.render("livrosusuario", {
        dados_livro:resultado
      })
  })
};

        // Lista de livro
        exports.listar = (req, res) => {
          Livro.find((err, resultado) => {
            if (err) return console.log(err);

            res.render("livros", {
              dados_livro: resultado
            });
          });
        };

        // Cadastrar novo livro
        exports.cadastrar = (req, res) => {
          res.render("livrosnovo");
        };
        //condições para cadastro e uso de async com await para aguardar consolidação de cadastro
        exports.cadastrarPOST = async (req, res) => {
          try {
            const livro = new Livro(req.body);
            await livro.save();
            res.redirect("/livros");
          } catch (err) {
            return res.status(400).send({
              err: "Falha no cadastro"
            });
          }
        };

        // Editar dados do livro
        exports.editar = async (req, res) => {
          try {
            const resultado = await Livro.findById(req.params.id);
            res.render("livroseditar", {
              dados: resultado
            });
          } catch (err) {
            res.send(err);
          }
        };

        exports.editarPOST = async (req, res) => {
          try {
            await Livro.findOneAndReplace({
              _id: req.params.id
            }, {
              ...req.body
            });
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

//pesquisar
        exports.pesquisar = (req, res) => {
          var resTitulo = req.query.procura;
          var resAutor = req.query.procura;
          var resEditora = req.query.procura;
          var resAno = req.query.procura;
          var resISBN = req.query.procura;
      
          Livro.find({$or:[{titulo: resTitulo}, {autor: resAutor}, {editora: resEditora}, {ano: resAno}, {isbn: resISBN}]}, (err, livro)=>{
              if(err){
                  return res.status(500).send("Erro ao consultar livro");
              }
              res.render("livrosusuario", {dados_livro:livro})
          })
      };