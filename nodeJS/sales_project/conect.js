var mongoose = require("mongoose")

mongoose.connect("mongodb_here").then(()=>{ //inserir seu acesso mongodb
    console.log("banco conectado");
}).catch((err)=>{
    console.log("desconectado" + err);
})