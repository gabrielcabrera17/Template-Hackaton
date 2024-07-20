const exprees = require('express');
const cors = require('cors');
const app = exprees();

// requiriendo la base de datos

require('./server/config/baseDato.js');



app.listen(8080, () => {
    console.log('servidor corriendo en el puerto 8080');
})