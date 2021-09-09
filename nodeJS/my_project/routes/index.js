const express = require("express");//chamando express
const router = express.Router();//chamando rotas do express
const produtos = require("../controllers/produtosController"); 

// Página Inicial.
router.get("/", (req, res) => {
  res.render("views/pages/index.ejs");
});

// rotas de produtos

//listar
router.get("/produtos", produtos.listar);

//cadastrar
router.get("/cadastrarProdutos", produtos.cadastrarProdutosGet)
router.post("/cadastrarProdutos", produtos.cadastrarProdutosPost)

//editar
router.get("/editarProdutos/:id", produtos.editarProdutosGet)
router.post("/editarProdutos", produtos.editarProdutosPost)

//apagar
router.get("/deletarProdutos/:id", produtos.deletarProdutos)

router.get("/pesquisar/:id", produtos.pesquisarGet)
router.post("/pesquisar", produtos.pesquisarPost)

module.exports = router;