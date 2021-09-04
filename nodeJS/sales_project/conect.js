var mongoose = require("mongoose")

mongoose.connect("mongodb+srv://paulo_henrique:paulo_henrique@cluster0.kypul.mongodb.net/vendas?retryWrites=true&w=majority").then(()=>{
    console.log("banco conectado");
}).catch((err)=>{
    console.log("desconectado" + err);
})