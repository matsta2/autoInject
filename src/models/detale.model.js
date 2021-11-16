'use strict';
var dbConn = require('./../../config/db.config');
//Detale object create
var Detale = function (detale) {
  this.masinos_id = detale.masinos_id;
  this.pavadinimas = detale.pavadinimas;
  this.modelis = detale.modelis;
  this.metai = detale.metai;
  this.status = detale.status ? detale.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Detale.create = function (newEmp, result) {
  dbConn.query("INSERT INTO detale set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Detale.findById = function (id, result) {
  dbConn.query("Select * from detale where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Detale.findAll = function (result) {
  dbConn.query("Select * from detale", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('detale : ', res);
      result(null, res);
    }
  });
};
Detale.update = function (id, detale, result) {
  dbConn.query("UPDATE detale SET masinos_id=?,pavadinimas=?,modelis=?,metai=? WHERE id = ?", [detale.masinos_id, detale.pavadinimas, detale.modelis, detale.metai, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Detale.delete = function (id, result) {
  dbConn.query("DELETE FROM detale WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Detale;