const express = require('express');

const router = express.Router();

const extraController = require('../controllers/extra_controller');


router.get('/mandar-sugerencia', extraController.getNuevaSugerencia);

router.post('/mandar-sugerencia', extraController.postNuevaSugerencia);

router.get('/historial-sugerencias', extraController.getHistorialSugerencias);

router.get('/pregunta-a-responder-lab', extraController.getPreguntaResponder);

module.exports = router;