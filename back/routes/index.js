const express = require('express');
const router = express.Router();

// Endpoint 1
router.post('/1', async (req, res) => {
    const newObject = req.body;
    for (let property in newObject) {
        if(newObject[property] === "" || newObject[property] === false || newObject[property].length === 0 ) {
            delete newObject[property];
        } else {};
    };
    const size = Object.keys(newObject);
    if(size.length > 0){
        res.json(newObject);
    }
});

// Endpoint 2
router.get('/2', async (req, res) => {
    const texto = 'Texto de prueba';
    const objetoTexto = {
        valor: texto,
        reverso: texto.split("").reverse().join(""),
        tamaño: texto.length
    }
    res.json(objetoTexto);
});

module.exports = router;