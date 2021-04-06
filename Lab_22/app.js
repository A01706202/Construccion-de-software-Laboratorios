const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const csrf = require('csurf');
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'me gustan mucho los gatos', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const misMurcielagos = require('./routes/murcielagos');
const misExtra = require('./routes/extra');
const misUsers = require('./routes/users');
const misPersonajes = require('./routes/personajes');


app.use(express.static(path.join(__dirname, 'public')));

app.use(csrfProtection);


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.get('/', (request, response, next) => {
    response.render('index', {
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

app.use('/murcielagos', misMurcielagos);
app.use('/extra', misExtra);
app.use('/personajes', misPersonajes);
app.use('/users/', misUsers);

app.use((request, response, next) => {
    //response.statusCode = 404;
    response.status(404);
    response.send('<h1>Page not found :(</h1>');
});

app.listen(3000);