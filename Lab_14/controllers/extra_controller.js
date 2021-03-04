const Sugerencia = require('../models/sugerencia');

exports.getNuevaSugerencia = (request, response, next) => {
    response.render('mandar_sugerencia');
};

exports.postNuevaSugerencia = (request, response, next) => {
    const nueva_sugerencia = new Sugerencia(request.body.opinion);
    nueva_sugerencia.save();
    console.log(request.body.opinion);
    response.setHeader('Set-Cookie', ['ultima_sugerencia=' +nueva_sugerencia.recomendacion]);
    response.redirect('/extra/historial-sugerencias');
};

exports.getHistorialSugerencias = (request, response, next) => {
    console.log('Cookie: ' + request.get('Cookie'));
    request.get('Cookie').split(';')[1].trim().split('=')[1];
    
    response.render('sugerencia', {
        historial_sugerencias: Sugerencia.fetchAll(),
        total: Sugerencia.CuentaSugerencias()
    });
};

exports.getPreguntaResponder = (request, response, next) => {
    response.render('pregunta-a-responder');
};