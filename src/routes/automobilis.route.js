const express = require('express')
const router = express.Router()
const masinaController =   require('../controllers/automobilis.controller');

router.get('/', masinaController.findAll);

router.post('/', masinaController.create);

router.get('/:id', masinaController.findById);

router.put('/:id', masinaController.update);

router.delete('/:id', masinaController.delete);
module.exports = router