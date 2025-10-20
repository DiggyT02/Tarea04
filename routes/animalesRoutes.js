const express = require('express')

//Enrutador
const router = express.Router()


const animalesController = require('../controllers/animalesController');

// Definir rutas
router.post('/', animalesController.crearAnimal)
router.get('/', animalesController.obtenerAnimales)
router.get('/:id', animalesController.obtenerAnimalesPorId)
router.put('/:id', animalesController.actualizarAnimal)
router.delete('/:id', animalesController.eliminarAnimal)

module.exports = router