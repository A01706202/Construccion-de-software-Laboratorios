const express = require('express');

const router = express.Router();

const sugerencias = [];

router.get('/dato-curioso', (request, response, next) => {
    response.send('<h1><ul>Dato curioso</ul></h1> ¿Sabías que puedes beber lava pero solo una vez en la vida?<br><br> <img alt="Lava" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Pahoehoe_toe.jpg">'); 
});

router.get('/mandar-sugerencia', (request, response, next) => {
    response.render('mandar_sugerencia', {
        titulo: 'Sugerencias'
    });
});

router.post('/mandar-sugerencia', (request, response, next) => {
    sugerencias.push(request.body.opinion);
    response.redirect('/historial-sugerencias');
    /*const fs = require('fs');
    fs.appendFile('texto.txt', request.body.Opinion+"\n", (error)=> {
        if(error){
            throw error;
        }
    });*/
});

router.post('/historial-sugerencias', (request, response, next) => {
    response.render('mandar_sugerencia', {
        sugerencias: sugerencias
    });
});

router.get('/pregunta-a-responder-lab', (request, response, next) => {
    response.render('pregunta-a-responder');
});

module.exports = router;