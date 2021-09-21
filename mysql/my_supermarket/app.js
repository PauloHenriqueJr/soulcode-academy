//express
const express = require('express'); //chamando express
const app = express(); //estanciando app
const port = 3000 // criando variavel para porta


// Conexão ao database mysql
const mysql = require("mysql2");
const con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "supermercado"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado!");
});
//model

// const Produtos = mongoose.model("produtos", {
//     nome: String,
//     v1Unit: String,
//     codigoBarras: String
// });

// configurando a view ejs para carregamento
app.set("view engine", "ejs");
app.set("views", __dirname, "/views");

// Middlewares
app.use(express.urlencoded({
    extended: true
})); //fluxe
app.use(express.json()); //type json

// importando public
const path = require('path'); //criando variavel pra uso
app.use(express.static(path.join(__dirname, 'public')));

//routes

app.get("/", (req, res) => {
    res.render("index.ejs")
});


app.get("/produtos", (req, res) => { //rota para pag produtos
    con.query("SELECT * FROM produtos;", (err, produto) => {
      if (err) throw err;
      res.render("produtos", {dados: produto})
    })
  })

app.get("/cadastrarprodutos", (req, res)=>{
    res.render("cadastrarProdutos");
});


//routes post

app.post("/cadastrarProdutos", (req, res) => {
    let desc_produto = req.body.desc_produto;
    let quant_produto = req.body.quant_produto;
    let preco_produto = req.body.preco_produto;

    var sql = `INSERT INTO produtos (desc_produto, quant_produto, preco_produto) VALUES ('${desc_produto}', '${quant_produto}','${preco_produto}')`;
    con.query(sql, function (err, result) {
        resultado = result;
        console.log(resultado);
        if (err) throw err;
        console.log("dado inserido: " + sql);
       res.redirect("/produtos");
        
    });
})


//editar produto
app.get("/editarProduto/:id", (req, res)=>{
    var produtoID = req.params.id;
    var sql = `SELECT * FROM produtos WHERE id_produto = ${produtoID}`;
    con.query(sql, (err, produto) => {
        if (err) throw err;
        console.log("Number of records update: " + sql);
        return res.render("editarProdutos", {dados:produto[0]})
    });  
});

app.post("/editarProduto", (req, res)=>{
    var iddoproduto = req.body.id;
    var updates = req.body;
    var sql = `UPDATE produtos SET ? WHERE id_produto = ?`;
    con.query(sql, [updates, iddoproduto],(err, data) => {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) updated");
      });
      res.redirect("/produtos");
 });


//apagar produto
app.get("/produtos/apagar/:id", (req, res)=>{
    var id = req.params.id;
    var sql = `DELETE FROM produtos WHERE id_produto = ?`;
    con.query(sql, [id], function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + sql);
    });
    return res.redirect("/produtos");

});


app.get("/pesquisar", (req, res) => {
    var busca = req.query.pesquisa;

    console.log(busca);
    Produtos.find({
        $or: [{
            nome: busca
        }, {
            v1Unit: busca
        }, {
            codigoBarras: busca
        }]
    }, (err, produto) => {
        if (err)
            return res.status(500).send("Erro ao consultar produto");
        res.render("produtos", {
            lista_produtos: produto
        })
    });
})

app.listen(port, () => {
    console.log("Servidor rodando na porta", +port);

});