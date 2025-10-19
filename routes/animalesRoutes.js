const express = require('express');

//Enrutador
const router = express.Router();


const controller = require('./controllers');

// Definir rutas
router.get('/animales', controller.getAllAnimals);
router.get('/animales/:id', controller.getAnimalById);
router.post('/animales', controller.createAnimal);
router.put('/animales/:id', controller.updateAnimal);
router.delete('/animales/:id', controller.deleteAnimal);

module.exports = router;