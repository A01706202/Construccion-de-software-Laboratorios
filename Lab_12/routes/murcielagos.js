const express = require('express');

const router = express.Router();

router.get('/tipos', (request, response, next) => {
    response.render('tipos-murcielagos');
});

router.get('/', (request, response, next) => {
    response.render('murcielagos');
});

module.exports = router;