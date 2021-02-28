const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const misMircielagos = require('./routes/murcielagos');
const misExtra = require('./routes/extra');

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.get('/', (request, response, next) => {
    response.send('<h1>Laboratorio 11</h1> Michelle Aylin Calzada Montes<br>A01706202<br>ITC<br> <br><br>Rutas disponibles:<br><br><li>/mandar-sugerencias</li>'); 
});

app.use('/murcielagos', misMircielagos);
app.use('/extra', misExtra);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('<h1>Page not found :(</h1>');
});

app.listen(3000);