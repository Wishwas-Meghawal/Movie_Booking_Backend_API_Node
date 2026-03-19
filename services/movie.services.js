const Movie = require('../models/movie.model.js');

//Create Movie 
const createMovie = async(data) =>{
  try {
    const movie = await Movie.create(data);
    return movie;
  } catch (error) {
    if(error.name === "ValidationError"){
      let err = {};
      Object.keys(error.errors).forEach((key) => {
        err[key] = error.errors[key].message;
      });
      console.log(err);
      return {err: err, code: 422};
    }else{
      throw error;
    }
  }
  
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