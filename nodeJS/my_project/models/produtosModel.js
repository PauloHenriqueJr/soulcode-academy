let mongoose = require('mongoose')

 

let produtoSchema = new mongoose.Schema({ //estanciando objeto schema moongoose

    nome: {
     type: String,
    },
    vlUnit:{
     type: String,
    },
    codigoBarras:{
     type: String,
    },

});

module.exports = mongoose.model("produto", produtoSchema)//exportando model