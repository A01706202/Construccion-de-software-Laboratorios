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

const misMurcielagos = require('./routes/murcielagos');
const misExtra = require('./routes/extra');
const misUsers = require('./routes/users');
const misPersonajes = require('./routes/personajes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const multer = require('multer');
//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer(
    { storage: fileStorage }
    ).single('image'));

app.use(express.static(path.join(__dirname, 'public')));

//Para acceder a los recursos de la carpeta uploads
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(cookieParser());
app.use(session({
    secret: 'me gustan mucho los gatos', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

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