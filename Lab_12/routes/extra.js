const express = require('express');

const router = express.Router();

const sugerencias = [];


router.get('/mandar-sugerencia', (request, response, next) => {
    response.render('mandar_sugerencia');
});

router.post('/mandar-sugerencia', (request, response, next) => {
    sugerencias.push(request.body.opinion);
    console.log(sugerencias);
    response.redirect('/extra/historial-sugerencias');
});

router.get('/historial-sugerencias', (request, response, next) => {
    response.render('sugerencia', {
        historial_sugerencias: sugerencias
    });
});

router.get('/pregunta-a-responder-lab', (request, response, next) => {
    response.render('pregunta-a-responder');
});

module.exports = router;