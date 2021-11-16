
'use strict';
var dbConn = require('./../../config/db.config');
//Masina object create
var Masina = function (masina) {
  this.serviso_id = masina.serviso_id;
  this.marke = masina.marke;
  this.modelis = masina.modelis;
  this.metai = masina.metai;
  this.vin_kodas = masina.vin_kodas;
  this.status = masina.status ? masina.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Masina.create = function (newEmp, result) {
  dbConn.query("INSERT INTO masina set ?", newEmp, function (err, res) {
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
Masina.findById = function (id, result) {
  dbConn.query("Select * from masina where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Masina.findAll = function (result) {
  dbConn.query("Select * from masina", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('masina : ', res);
      result(null, res);
    }
  });
};
Masina.update = function (id, masina, result) {
  dbConn.query("UPDATE masina SET serviso_id=?,marke=?,modelis=?,metai=?,vin_kodas=? WHERE id = ?", [masina.serviso_id, masina.marke, masina.modelis, masina.metai, masina.vin_kodas, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Masina.delete = function (id, result) {
  dbConn.query("DELETE FROM masina WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Masina;