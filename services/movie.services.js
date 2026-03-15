const Movie = require('../models/movie.model.js');

//Create Movie 
const createMovie = async(data) =>{
  const movie = await Movie.create(data);
  return movie;
}

//Delete Movie
const deleteMovie = async(id) =>{
  const response = await Movie.findByIdAndDelete(id);
  return response;
}


//Get Movie
const getMovieById  = async (id) =>{
  const movie = await Movie.findById(id);

  if(!movie){
    return{
      err: "No movie found for the corresponding id provided",
      code: 404,
    }
  };
  return movie;
}

module.exports = {
  getMovieById,
  deleteMovie,
  createMovie,
}