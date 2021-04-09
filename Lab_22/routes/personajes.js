const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router();

const personajesController = require('../controllers/personajes_controller');

router.get('/mandar-personaje', isAuth, personajesController.getNuevoPersonaje);

router.post('/mandar-personaje', isAuth, personajesController.postNuevoPersonaje);

router.get('/:personaje_id', isAuth, personajesController.getPersonaje);

router.get('/', isAuth, personajesController.getPersonajesEnviados);

module.exports = router;