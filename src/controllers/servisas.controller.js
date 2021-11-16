'use strict';
const Servisas = require('../models/servisas.model');

exports.findAll = function (req, res) {

  Servisas.findAll(function (err, servisas) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', servisas);
    res.send(servisas);
  });
};
exports.create = function (req, res) {
  const new_servisas = new Servisas(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Uzpildikyte visus laukelius' });
  } else {
    Servisas.create(new_servisas, function (err, servisas) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Servisas prideta sekmingai!", data: servisas });
    });
  }
};
exports.findById = function (req, res) {
  Servisas.findById(req.params.id, function (err, servisas) {
    if (err)
      res.send(err);
    res.json(servisas);
  });
};
exports.findAllById = function (req, res) {
  Servisas.findAllById(req.params.id, function (err, servisas) {
    if (err)
      res.send(err);
    res.json(servisas);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Uzpildikyte visus laukelius' });
  } else {
    Servisas.update(req.params.id, new Servisas(req.body), function (err, servisas) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Servisas atnaujintas' });
    });
  }
};
exports.delete = function (req, res) {
  Servisas.delete(req.params.id, function (err, servisas) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Servisas sekmingai istrintas' });
  });
};