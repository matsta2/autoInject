const express = require('express')
const router = express.Router()
const detaleController =   require('../controllers/detale.controller');

router.get('/', detaleController.findAll);

router.post('/', detaleController.create);

router.get('/:id', detaleController.findById);

router.put('/:id', detaleController.update);

router.delete('/:id', detaleController.delete);
module.exports = router