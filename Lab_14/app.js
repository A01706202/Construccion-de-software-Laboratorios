const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const cookieParser = require('cookie-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const misMurcielagos = require('./routes/murcielagos');
const misExtra = require('./routes/extra');
const misUsers = require('./routes/users');


app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/murcielagos', misMurcielagos);
app.use('/extra', misExtra);
app.use('/users/', misUsers);

app.use((request, response, next) => {
    //response.statusCode = 404;
    response.status(404);
    response.send('<h1>Page not found :(</h1>');
});

app.listen(3000);