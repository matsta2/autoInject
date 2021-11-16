'use strict';
var dbConn = require('./../../config/db.config');
//Servisas object create
var Servisas = function (servisas) {
  this.pavadinimas = servisas.pavadinimas;
  this.adresas= servisas.adresas;
  this.telefono_nr = servisas.telefono_nr;
  this.status = servisas.status ? servisas.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Servisas.create = function (newEmp, result) {
  dbConn.query("INSERT INTO servisas set ?", newEmp, function (err, res) {
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
Servisas.findById = function (id, result) {
  dbConn.query("Select * from servisas where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Servisas.findAllById = function (id, result) {
  dbConn.query("Select servisas.pavadinimas as servisopavadinimas, masina.modelis, detale.pavadinimas from servisas, masina, detale where servisas.id = 4 AND masina.id = 6 AND detale.id = 5", id,  function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Servisas.findAll = function (result) {
  dbConn.query("Select * from servisas", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('servisas : ', res);
      result(null, res);
    }
  });
};
Servisas.update = function (id, servisas, result) {
  dbConn.query("UPDATE servisas SET pavadinimas=?,adresas=?,telefono_nr=? WHERE id = ?", [servisas.pavadinimas, servisas.adresas, servisas.telefono_nr, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Servisas.delete = function (id, result) {
  dbConn.query("DELETE FROM servisas WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Servisas;