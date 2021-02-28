const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta1', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.get('/mandar-sugerencias', (request, response, next) => {
    response.send('<h1>¡Caja de sugerencias!</h1> <br>Envía tus sugerencias y quejas de esta app web, nos importa su opinión c:<br><br> <form action="mandar-sugerencia" method="POST"><input type="text" name="Opinion"><input type="submit" value="Enviar"></form>');
});

app.use('/mandar-sugerencias', (request, response, next) => {
    console.log(request.body.Opinion);
    const fs = require('fs');
    fs.appendFile('texto.txt', request.body.Opinion+"\n", (error)=>{
        if(error){
            throw error;
        }
    });
    response.send('¡Sugerencia mandada con éxito!');
});

app.use('/', (request, response, next) => {
    response.send('<h1>Laboratorio 11</h1> <br>Rutas discponibles:<br><br><li>/mandar-sugerencias</li>'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);