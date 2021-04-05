const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router();

const concursoController = require('../controllers/concurso_controller');


router.get('/fotos-enviadas/:foto_id', isAuth, concursoController.getfoto);

router.get('/mandar-foto', isAuth, concursoController.getNuevaFoto);

router.post('/mandar-foto', isAuth, concursoController.postNuevaFoto);

router.get('/fotos-enviadas', isAuth, concursoController.getFotosEnviadas);

module.exports = router;