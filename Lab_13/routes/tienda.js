const express = require('express');

const router = express.Router();

router.use('/', (request, response, next) => {
    response.render('tienda');
});

module.exports = router;