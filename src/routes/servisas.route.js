const express = require('express')
const router = express.Router()
const servisasController =   require('../controllers/servisas.controller');

router.get('/', servisasController.findAll);

router.post('/', servisasController.create);

router.get('/:id/:id/:id', servisasController.findAllById);

router.get('/:id', servisasController.findById);

router.put('/:id', servisasController.update);

router.delete('/:id', servisasController.delete);
module.exports = router