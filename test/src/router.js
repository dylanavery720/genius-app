const express = require('express');
const controller = require('./Controllers/controller');
const fetchController = require('./Controllers/fetchController');

module.exports = function(app) {
  const apiRoutes = express.Router();
  apiRoutes.get('/helloworld', controller.helloworld)
  apiRoutes.get('/test', fetchController.fetchWorld)

  app.use('/api', apiRoutes);
}
