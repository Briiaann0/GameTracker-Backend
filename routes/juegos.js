
const express= require('express');
const router = express.Router();
const juegosController = require('../controllers/juegosController');

router.post('/', juegosController.crearJuego);

router.get('/', juegosController.obtenerJuegos);

router.put('/:id', juegosController.actualizarJuego);

router.delete('/:id', juegosController.eliminarJuego);

router.get('/:id', juegosController.obtenerJuego);

module.exports = router;