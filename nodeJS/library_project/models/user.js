const mongoose = require("mongoose"); //chamando mongoose

const userSchema = new mongoose.Schema({ //estanciando objeto schema moongoose
  //modelando schema para exportação
  
  username: {
    type: String,
    maxLenght: 170,
  },
  email: {
    type: String,
    maxLenght: 100,
  },
  password: {
    type: String,
    maxLenght: 50,
  },

});

module.exports = mongoose.model("user", userSchema) //exportando model