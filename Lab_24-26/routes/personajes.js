const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router();

const personajesController = require('../controllers/personajes_controller');


router.get('/lista-personajes/:personaje_id', isAuth, personajesController.getPersonaje);

router.get('/lista-personajes', isAuth, personajesController.getPersonajesEnviados);

router.get('/mandar-personaje', isAuth, personajesController.getNuevoPersonaje);

router.post('/mandar-personaje', isAuth, personajesController.postNuevoPersonaje);

module.exports = router;