const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router();

const extraController = require('../controllers/extra_controller');


router.get('/historial-sugerencias/:sugerencia_id', isAuth, extraController.getSugerencia);

router.get('/mandar-sugerencia', isAuth, extraController.getNuevaSugerencia);

router.post('/mandar-sugerencia', isAuth, extraController.postNuevaSugerencia);

router.get('/historial-sugerencias', isAuth, extraController.getHistorialSugerencias);

router.get('/pregunta-a-responder-lab', isAuth, extraController.getPreguntaResponder);

module.exports = router;