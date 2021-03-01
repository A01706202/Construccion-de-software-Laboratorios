const express = require('express');
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const misMurcielagos = require('./routes/murcielagos');
const misExtra = require('./routes/extra');

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.get('/', (request, response, next) => {
    response.send('<h1><ul>Laboratorio 11</ul></h1> Michelle Aylin Calzada Montes<br>A01706202<br>ITC<br> <br><br>Rutas disponibles:<br><br><li>/murcielagos</li> <li>/murcielagos/tipos</li> <li>/extra/dato-curioso</li> <li>/extra/mandar-sugerencia</li> <li>/extra/pregunta-a-responder-Lab_11</li>'); 
});

app.use('/murcielagos', misMurcielagos);
app.use('/extra', misExtra);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('<h1>Page not found :(</h1>');
});

app.listen(3000);