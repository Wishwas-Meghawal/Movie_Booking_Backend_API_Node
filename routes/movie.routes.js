const MovieController = require('../controllers/movie.controller.js');

const routes = (app) =>{

  // routes function takes express app object as parameter

  app.post('/mba/api/v1/movies',MovieController.createMovie);
}

module.exports = routes;