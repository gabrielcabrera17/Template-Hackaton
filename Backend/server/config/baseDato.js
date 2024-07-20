const mongoose = require("mongoose");
 
mongoose.connect('mongodb://127.0.0.1:27017/template_db')
    .then(db => console.log('Base de datos template conectada'))
    .catch(err => console.log('Ocurrio un error al conectar la base de datos',err));