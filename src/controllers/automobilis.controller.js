
'use strict';
const Masina = require('../models/automobilis.model');

exports.findAll = function (req, res) {

  Masina.findAll(function (err, masina) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', masina);
    res.send(masina);
  });
};
exports.create = function (req, res) {
  const new_masina = new Masina(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Uzpildikyte visus laukelius' });
  } else {
    Masina.create(new_masina, function (err, masina) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Automobilis pridetas sekmingai!", data: masina });
    });
  }
};
exports.findById = function (req, res) {
  Masina.findById(req.params.id, function (err, masina) {
    if (err)
      res.send(err);
    res.json(masina);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Uzpildikyte visus laukelius' });
  } else {
    Masina.update(req.params.id, new Masina(req.body), function (err, masina) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Automobilis atnaujintas sekmingai' });
    });
  }
};
exports.delete = function (req, res) {
  Masina.delete(req.params.id, function (err, masina) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Automobilis sekmingai istrintas' });
  });
};