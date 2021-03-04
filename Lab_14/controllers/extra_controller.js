const Sugerencia = require('../models/sugerencia');

exports.getNuevaSugerencia = (request, response, next) => {
    response.render('mandar_sugerencia');
};

exports.postNuevaSugerencia = (request, response, next) => {
    const nueva_sugerencia = new Sugerencia(request.body.opinion);
    nueva_sugerencia.save();
    console.log(request.body.opinion);
    response.redirect('/extra/historial-sugerencias');
};

exports.getHistorialSugerencias = (request, response, next) => {
    const num_sugerencias = Sugerencia.CuentaSugerencias();
    response.render('sugerencia', {
        historial_sugerencias: Sugerencia.fetchAll(),
        total: Sugerencia.CuentaSugerencias()
    });
};

exports.getPreguntaResponder = (request, response, next) => {
    response.render('pregunta-a-responder');
};