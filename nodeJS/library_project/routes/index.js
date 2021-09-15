const express = require("express");//chamando express
const router = express.Router();//chamando rotas do express
const livros = require("../controllers/livrosController.js"); //chamando controllers do aluno

//login
router.get("/", (req, res)=>{
  res.render("login");
});

//resgister
router.get("/register", livros.register);
router.post("/register", livros.registerPost);


// router.get("/", (req, res) => {
//   res.render("index");
// });

/////// Rotas de livros ////////

///livros para usuarios
router.get("/livrosusuario", livros.livrosusuario)

// Listagem
router.get("/livros", livros.listar);

//pesquisar
router.get("/livrospesquisar", livros.pesquisar);

// Cadastro
router.get("/livros/novo", livros.cadastrar);
router.post("/livros/novo", livros.cadastrarPOST);

// Edição de cadastro
router.get("/livros/editar/:id", livros.editar);
router.post("/livros/editar/:id", livros.editarPOST);

// Apagar
router.get("/livros/apagar/:id", livros.apagar);

module.exports = router;