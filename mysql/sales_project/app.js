//express
const express = require('express');//chamando express
const app = express();//estanciando app
const mongoose = require('mongoose');//chamando mongoose
const port = 3000 // criando variavel para porta


// Conexão ao database mongodb

const database = "mongodb here" //inserir seu acesso mongodb


mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true  }, (err, client) => {
    if (err) return console.log(err);
  
    db = mongoose.connection;
    console.log("Banco de Dados Conectado");
  });

//model

const Produtos = mongoose.model("produtos", {
    nome: String,
    v1Unit: String,
    codigoBarras: String
});

// configurando a view ejs para carregamento
app.set("view engine", "ejs");
app.set("views", __dirname, "/views");

// Middlewares
app.use(express.urlencoded({extended: true}));//fluxe
app.use(express.json()); //type json

// importando public
const path = require('path');//criando variavel pra uso
app.use(express.static(path.join(__dirname, 'public')));

//routes

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.get("/produtos", (req, res) => {
    let lista_produtos = Produtos.find({}, (err, produto) => {
        if (err)
            return res.status(500).send("Erro ao consultar produto");

        res.render("produtos", {lista_produtos: produto});
    });

});

app.get("/cadastrarProdutos", (req, res) => {
    res.render("formprodutos");
});



//routes post

app.post("/cadastrarProdutos", (req, res) => {
    let produto = new Produtos();
    produto.nome = req.body.nome;
    produto.v1Unit = req.body.valor;
    produto.codigoBarras = req.body.codBarras;

    produto.save((err) => {
        if (err) {
            return res.status(500).send('Erro ao cadastrar produto');
        }
        return res.redirect('/produtos');
    })

});

//editar produto
app.get("/editarProduto/:id", (req,res)=>{
	Produtos.findById(req.params.id, (err, produto)=>{
		if(err)
			return res.status(500).send("Erro ao consultar produto");
		res.render("editarProdutos",{dados_item:produto})
	});
});

app.post("/editarProduto", (req,res)=>{
	let id = req.body.id;
	Produtos.findById(id,(err, produto)=>{
		if(err)
			return res.status(500).send("Erro ao consultar produto");
            produto.nome = req.body.nome;
            produto.v1Unit = req.body.valor;
            produto.codigoBarras = req.body.codBarras;

		produto.save(err =>{
			if(err)
				return res.status(500).send("Erro ao editar produto");
			return res.redirect("/produtos");
			
		});
	});
});


//apagar produto
app.get("/produtos/apagar/:id", (req, res) => {
    var apagar_produto = req.params.id; 
    Produtos.findByIdAndDelete({ _id: apagar_produto }, (err, result) => { 
        if (err)
            return res.status(500).send('Erro ao excluir produto')
    })
    res.redirect("/produtos");
})


app.listen(port, () => {
    console.log("Servidor rodando na porta", +port);

});


app.get("/pesquisar",(req,res)=>{
    var busca = req.query.pesquisa;
    
     console.log(busca);
     Produtos.find({ $or: [ { nome:busca }, { v1Unit:busca }, { codigoBarras:busca} ] }, (err, produto)=>{
		if(err)
			return res.status(500).send("Erro ao consultar produto");
		res.render("produtos",{lista_produtos:produto})
	});
})

