const Produtos = require("../models/produtosModel")

exports.listar = (req, res) => {

    Produtos.find((err, produtos) => {

        if (err) {

            console.error(err)

            return res.status(500).send("Erro ao consultar Produtos")

        }

        res.render("views/pages/produtos.ejs", {listar_produtos: produtos})

    })

}

//cadastrar

exports.cadastrarProdutosGet = (req, res) => {

    res.render("views/pages/produtosCadastrar")

};

 

exports.cadastrarProdutosPost = (req, res) => {

    console.log(req.body)

    let produto = new Produtos()

    produto.nome = req.body.nome
    produto.vlUnit = req.body.valor
    produto.codigoBarras = req.body.codBarras

    produto.save(err => {

        if (err)

        return res.status(500).send("Erro ao cadastrar Produto")

 

        return res.redirect("produtos")

    })

};

//editar
exports.editarProdutosGet = (req, res) => {

    Produtos.findById(req.params.id, (err, produto) => {

        if (err)

         return res.status(500).send("Erro ao consultar produto")

  

         res.render('views/pages/produtosEditar', {produto: produto})

         console.log(produto)

    })

  }

 

  exports.editarProdutosPost = (req, res) => {

    Produtos.findById(req.body.id, (err, produto) => {

        if (err)

         return res.status(500).send("Erro ao consultar produto")

         produto.nome = req.body.nome
         produto.vlUnit = req.body.valor
         produto.codigoBarras = req.body.codBarras

         produto.save(err => {

            if (err)

            return res.status(500).send("Erro ao cadastrar Produto")
            return res.redirect('/produtos')

        }) 

    })
}

//deletar
exports.deletarProdutos = (req, res) => {

    Produtos.deleteOne({_id: req.params.id}, (err, result) => {

        if (err) return res.status(500).send("Erro ao consultar produto")

    })

    //Produtos.findByIdAndRemove(id).exec()

    res.redirect('/produtos')

    

  }

  //pesquisar
  exports.pesquisarGet = (req,res)=>{
    var busca = req.query.pesquisa;
    
     Produtos.find({ $or: [ 

         { nome:busca }, 
         { vlUnit:busca }, 
         { codigoBarras:busca}
        
        ] }, (err, produto)=>{
    if(err)
      return res.status(500).send("Erro ao consultar produto");
    res.render("produtos",{listar_produtos:produto})
  });
  };

  exports.pesquisarPost = (req,res)=>{
    var busca = req.body.query;
    
     Produtos.find({ $or: [ 

         { nome:busca }, 
         { vlUnit:busca }, 
         { codigoBarras:busca}
        
        ] }, (err, produto)=>{
    if(err)
      return res.status(500).send("Erro ao consultar produto");
    res.render("produtos",{listar_produtos:produto})
  });
  };

