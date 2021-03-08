const Sugerencia = require('../models/sugerencia');

exports.getNuevaSugerencia = (request, response, next) => {
    response.render('mandar_sugerencia',{
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevaSugerencia = (request, response, next) => {
    const nueva_sugerencia = new Sugerencia(request.body.opinion);
    console.log(request.body.opinion);
    nueva_sugerencia.save()
    .then(() => {
        response.setHeader('Set-Cookie', ['ultima_sugerencia='+nueva_sugerencia.recomendacion+'; HttpOnly']);
        response.redirect('/extra/historial-sugerencias');
        })
    .catch(err => console.log(err));
};

exports.getHistorialSugerencias = (request, response, next) => {
    console.log('Cookie: ' + request.get('Cookie'));
    console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);

    //Con cookie-parser
    console.log(request.cookies);
    console.log(request.cookies.ultima_sugerencia);

    Sugerencia.fetchAll()
        .then(([rows, fieldData]) => {
            const sugerencias = [];
            for(let sugerencia of rows){
                console.log(sugerencia.recomendaciones);
                sugerencias.push({
                    recomendaciones: sugerencia.recomendaciones
                });
            }
            console.log(sugerencias);
            
                response.render('sugerencia', {
                    historial_sugerencias: sugerencias,
                    total: 2,
                    //isLoggedIn: request.session.isLoggedIn === true ? true : false
                    isLoggedIn: true
                });
            })
        .catch(err => {
            console.log(err);
        });
};

exports.getPreguntaResponder = (request, response, next) => {
    response.render('pregunta-a-responder', {
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};