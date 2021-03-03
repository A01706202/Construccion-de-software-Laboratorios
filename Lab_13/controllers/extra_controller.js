const sugerencias = [];

exports.action = (request, response, next) => {
    response.render('sugerencia', {
        historial_sugerencias: sugerencias
    });
};