const express = require('express');

const router = express.Router();

const murcController = require('../controllers/murcielagos_controller');

router.get('/tipos', murcController.getTipos);

router.use('/', murcController.getInfo);

module.exports = router;