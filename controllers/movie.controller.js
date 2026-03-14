const { response } = require("express");
const Movie = require("../models/movie.model.js");
const movieService = require("../services/movie.services.js");

/**
 * Controller Function to Create a New Movie
 * @returns moive created
 */


const errResponseBody = {
  err:{},
  data:{},
  message:"Something Want Wrong, cnanot process the request",
  success: false
}
const successResponseBody = {
  err:{},
  data:{},
  message:"Successfully processed the request",
  success: true
}

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    return res.status(201).json({
      success: true,
      error: {},
      data: movie,
      message: "Successfully created a new movie",
    });
  } catch (error) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: error,
      data: {},
      message: "Something went wrong",
    });
  }
};

/**
 * Controller Function to Delete  a Single Movie
 * @returns moive deleted
 */

const deleteMovie = async (req, res) => {
  try {
    const response = await Movie.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json({
      success: true,
      error: false,
      message: "Successfully Deleted Movie",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
      message: "Something Want Wrong",
      data: {},
    });
  }
};

/**
 * Controller Function to Get a Single Movie
 * @returns moive Get
 */

const getMovie = async (req,res) => {
  try {
    const response = await movieService.getMovieById(req.params.id);

    if(response.err){
      errResponseBody.err = response.err;
      return res.status(response.code).json(errResponseBody)
    }

    successResponseBody.data = response;
     return res.status(200).json(successResponseBody);
     
  } catch (error) {
      return res.status(500).json(errResponseBody);
  }
}

module.exports = {
  createMovie,
  deleteMovie,
  getMovie
};
