const express = require('express');
const controller = require('./Controllers/controller');
const jonwayne = require('./Controllers/Artists/jonwayne');
const schoolboyq = require('./Controllers/Artists/schoolboyq');
const nipseyhussle = require('./Controllers/Artists/nipseyhussle');
const kanyewest = require('./Controllers/Artists/kanyewest');
const lupefiasco = require('./Controllers/Artists/lupefiasco');


module.exports = function(app) {
  const apiRoutes = express.Router();
  apiRoutes.get('/helloworld', controller.helloworld)
  apiRoutes.get('/jonwayne', jonwayne.fetchArtist)
  apiRoutes.get('/schoolboyq', schoolboyq.fetchArtist)
  apiRoutes.get('/nipseyhussle', nipseyhussle.fetchArtist)
  apiRoutes.get('/kanyewest', kanyewest.fetchArtist)
  apiRoutes.get('/lupefiasco', lupefiasco.fetchArtist)

  app.use('/api', apiRoutes);
}
