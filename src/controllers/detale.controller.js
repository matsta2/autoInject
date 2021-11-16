'use strict';
const Detale = require('../models/detale.model');

exports.findAll = function (req, res) {

  Detale.findAll(function (err, detale) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', detale);
    res.send(detale);
  });
};
exports.create = function (req, res) {
  const new_detale = new Detale(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Uzpildikyte visus laukelius' });
  } else {
    Detale.create(new_detale, function (err, detale) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Detale prideta sekmingai!", data: detale });
    });
  }
};
exports.findById = function (req, res) {
  Detale.findById(req.params.id, function (err, detale) {
    if (err)
      res.send(err);
    res.json(detale);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Uzpildikyte visus laukelius' });
  } else {
    Detale.update(req.params.id, new Detale(req.body), function (err, detale) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Detale atnaujinta sekmingai' });
    });
  }
};
exports.delete = function (req, res) {
  Detale.delete(req.params.id, function (err, detale) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Detale sekmingai istrinta' });
  });
};