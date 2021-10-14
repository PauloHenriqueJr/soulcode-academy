const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const department_controller = require ('./department.controller');
const product_controller = require ('./product.controller')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(cors());

mongoose.connect("MONGODB_HERE", { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/departments', department_controller);
app.use('/products', product_controller);

app.listen(3000, () => {
    console.log("Servidor rodando na porta ", 3000);
});
