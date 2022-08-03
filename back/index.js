const express = require("express");
var cors = require('cors');

// initializations
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

// Ruta
app.use('/', require('./routes/index'));

// Servidor
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), ()=>{
    console.log('Servidor activo en puerto', app.get('port'));
});