const express = require('express');

const router = express.Router();

router.get('/dato-curioso', (request, response, next) => {
    response.send('<h1><ul>Dato curioso</ul></h1> ¿Sabías que puedes beber lava pero solo una vez en la vida?<br><br> <img alt="Lava" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Pahoehoe_toe.jpg">'); 
});

router.get('/mandar-sugerencia', (request, response, next) => {
    response.send('<h1><ul>¡Caja de sugerencias!</ul></h1> <br>Envía tus sugerencias y quejas de esta app web, nos importa su opinión c:<br><br> <form action="mandar-sugerencia" method="POST"><input type="text" name="Opinion"><input type="submit" value="Enviar"></form>');
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

router.get('/pregunta-a-responder-lab', (request, response, next) => {
    response.send('<h1><ul>Package.json</ul></h1> Es un archivo de definición para un proyecto en el cual le especificamos referencias de autor, repositorio, nombre, versión, descripción y dependencias.<br>Nos sirve para hacer nuestros trabajos de manera más ordenada y limpia.');
});

module.exports = router;