const express = require('express');

const router = express.Router();

router.get('/mandar-sugerencia', (request, response, next) => {
    response.send('<h1>¡Caja de sugerencias!</h1> <br>Envía tus sugerencias y quejas de esta app web, nos importa su opinión c:<br><br> <form action="mandar-sugerencia" method="POST"><input type="text" name="Opinion"><input type="submit" value="Enviar"></form>');
});

router.post('/mandar-sugerencia', (request, response, next) => {
    const fs = require('fs');
    fs.appendFile('texto.txt', request.body.Opinion+"\n", (error)=> {
        if(error){
            throw error;
        }
    });
    response.send('<h1>¡Sugerencia mandada con éxito!<h1>');
});

router.post('/pregunta-a-responder-Lab_11', (request, response, next) => {
    response.send(':p');
});

module.exports = router;