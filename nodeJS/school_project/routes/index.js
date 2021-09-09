const express = require("express");//chamando express
const router = express.Router();//chamando rotas do express
const alunos = require("../controllers/alunosController"); //chamando controllers do aluno

// Página Inicial.
router.get("/", (req, res) => {
  res.render("views/pages/index.ejs");
});

/////// Rotas do aluno ////////

// Listagem
router.get("/alunos", alunos.listar);

// Cadastro
router.get("/alunosCadastrar", alunos.cadastrarGet);
router.post("/alunosCadastrar", alunos.cadastrarPOST);

// Edição de cadastro
router.get("/alunosEditar/:id", alunos.editarGet);
router.post("/alunosEditar/:id", alunos.editarPOST);

// Apagar
router.get("/alunosApagar/:id", alunos.apagar);

module.exports = router;