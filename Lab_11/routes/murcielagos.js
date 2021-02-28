const express = require('express');

const router = express.Router();

router.get('/tipos', (request, response, next) => {
    response.send('<h1>Murciélagos<h1>'); 
});

router.get('/', (request, response, next) => {
    response.send('<h1>Tipos<h1>'); 
});

module.exports = router;