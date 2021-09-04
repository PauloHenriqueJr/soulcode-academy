const express = require("express");//chamando express
const router = express.Router();//chamando rotas do express
const alunos = require("../controllers/alunosController.js"); //chamando controllers do aluno

// Página Inicial.
router.get("/", (req, res) => {
  res.render("index.ejs");
});

/////// Rotas do aluno ////////

// Listagem
router.get("/alunos", alunos.listar);

// Cadastro
router.get("/alunos/novo", alunos.cadastrar);
router.post("/alunos/novo", alunos.cadastrarPOST);

// Edição de cadastro
router.get("/alunos/editar/:id", alunos.editar);
router.post("/alunos/editar/:id", alunos.editarPOST);

// Apagar
router.get("/alunos/apagar/:id", alunos.apagar);

module.exports = router;