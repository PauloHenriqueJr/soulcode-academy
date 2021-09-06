const express = require("express");//chamando express
const router = express.Router();//chamando rotas do express
const livros = require("../controllers/livrosController.js"); //chamando controllers do aluno

// Página Inicial.
router.get("/", (req, res) => {
  res.render("index.ejs");
});

/////// Rotas de livros ////////

// Listagem
router.get("/livros", livros.listar);

// Cadastro
router.get("/livros/novo", livros.cadastrar);
router.post("/livros/novo", livros.cadastrarPOST);

// Edição de cadastro
router.get("/livros/editar/:id", livros.editar);
router.post("/livros/editar/:id", livros.editarPOST);

// Apagar
router.get("/livros/apagar/:id", livros.apagar);

module.exports = router;