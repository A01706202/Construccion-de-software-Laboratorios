const Personaje = require('../models/personaje');

exports.getPersonaje = (request, response, next) => {
        const id = request.params.personaje_id;
        Personaje.fetchOne(id)
            .then(([rows, fieldData]) => {
                response.render('personaje-especifico', { 
                    titulo: "Personaje específico",
                    historial_personajes: rows,
                    isLoggedIn: request.session.isLoggedIn === true ? true : false
                });
            })
            .catch(err => {
                console.log(err);
            });
};

exports.getNuevoPersonaje = (request, response, next) => {
    response.render('mandar_personaje',{
        csrfToken: request.csrfToken(),
        titulo: "Mandar personaje",
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevoPersonaje = (request, response, next) => {
    const nuevo_personaje = new Personaje(request.body.name, request.body.videogame, request.body.image);
    console.log(request.body.name);
    nuevo_personaje.save()
    .then(() => {
        response.setHeader('Set-Cookie', ['nuevo_personaje='+nuevo_personaje.name+'; HttpOnly']);
        response.redirect('/');
        })
    .catch(err => console.log(err));
};

exports.getPersonajesEnviados = (request, response, next) => {
    console.log('Cookie: ' + request.get('Cookie'));
    console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);

    //Con cookie-parser
    console.log(request.cookies);
    console.log(request.cookies.ultimo_personaje);

    
    Personaje.fetchAll()
        .then(([rows, fieldData]) => {          
                response.render('personaje', {
                    titulo: "Personajes enviados",
                    historial_personajes: rows,
                    isLoggedIn: request.session.isLoggedIn === true ? true : false
                });
            })
        .catch(err => {
            console.log(err);
        });
};