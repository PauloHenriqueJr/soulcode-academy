const mongoose = require("mongoose");//chamando mongoose

const alunoSchema = new mongoose.Schema({ //estanciando objeto schema moongoose
    //modelando schema para exportação
  matricula: {
    type: String,
    required: true,
    maxLenght: 20,
  },
  nome: {
    type: String,
    required: true,
    maxLenght: 90,
  },
  email: {
    type: String,
    required: true,
    maxLenght: 170,
  },
  cpf: {
    type: String,
    required: true,
    maxLenght: 12,
  },
  rg: {
    type: String,
    required: true,
    maxLenght: 13,
  },
  endereco: {
    type: String,
    required: true,
    maxLenght: 170,
  },
  telefone: {
    type: String,
    required: true,
    maxLenght: 15,
  },
});

module.exports = mongoose.model("aluno", alunoSchema)//exportando model