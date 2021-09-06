const mongoose = require("mongoose"); //chamando mongoose

const livroSchema = new mongoose.Schema({ //estanciando objeto schema moongoose
  //modelando schema para exportação
  isbn: {
    type: String,
    required: true,
    maxLenght: 20,
  },

  titulo: {
    type: String,
    required: true,
    maxLenght: 90,
  },
  autor: {
    type: String,
    required: true,
    maxLenght: 170,
  },
  editora: {
    type: String,
    required: true,
    maxLenght: 12,
  },
  ano: {
    type: String,
    required: true,
    maxLenght: 5,
  },

});

module.exports = mongoose.model("livro", livroSchema) //exportando model