'use strict';
module.exports = function (app) {
  var country = require('../controllers/customsController');

  // todoList Routes

  app.get('/MEX', function (req, res) {
    res.send({ destination: 'MEX', list: ['USA', 'MEX'] });
  });

  app.get('/CAN', function (req, res) {
    res.send({ destination: 'CAN', list: ['USA', 'CAN'] });
  });
};
