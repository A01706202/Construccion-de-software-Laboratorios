const express = require('express');

const router = express.Router();

router.get('/tipos', (request, response, next) => {
    response.send('<h1><ul>Tipos</ul></h1> Los tipos más comunes son:<br> <br><li>Zorro filipino volador</li> <li>Murciélago de la fruta</li> <li>Murciélago vampiro</li> <li>Murciélago de indiana</li> <li>Murciélago egipcio de la fruta</li> <liPequeño murciélago café</li> <li>Murciélago nariz de cerdo de Kitti</li>'); 
});

router.get('/', (request, response, next) => {
    response.send('<h1><ul>Murciélagos</ul></h1> Son animales mamíferos que tienen sus extremidades superiores como alas, los que los hacen los únicos mamíferos que vuelan. La gran mayoría son nocturnos y viven en cuevas en grandes manadas. Utilizan la ecolocación para guiarse y cazar insectos. También se distribuyen por casi la mayoría del mundo. <br><br> <img alt="Murcielago" src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_34284690_1640x1025.jpg?crop=0,0,1640,1230&wid=640&hei=480&scl=2.5625">'); 
});

module.exports = router;