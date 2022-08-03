const express = require('express');
const publicRequest = require('../requestMethods');
const router = express.Router();

// Endpoint 1
router.post('/1', async (req, res) => {
    const newObject = req.body;
    for (let property in newObject) {
        if(newObject[property] === false || newObject[property].length === 0 ) {
            delete newObject[property];
        } else {};
    };
    const size = Object.keys(newObject);
    if(size.length > 0){
        res.json(newObject);
    }
});

// Texto
router.get('/texto', async (req, res) => {
    const texto = 'Texto de prueba';
    res.json({texto});
});

// Endpoint 2
router.get('/2', async (req, res) => {
    const resData = await publicRequest.get(`/texto`);
    const objetoTexto = {
        valor: resData.data.texto,
        reverso: resData.data.texto.split("").reverse().join(""),
        tamaño: resData.data.texto.length
    }
    res.json(objetoTexto);
});

module.exports = router;