var mongoose = require("mongoose")

mongoose.connect("mongodb_here").then(()=>{
    console.log("banco conectado");
}).catch((err)=>{
    console.log("desconectado" + err);
})