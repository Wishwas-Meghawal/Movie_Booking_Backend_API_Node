const { response } = require("express");
const Movie = require("../models/movie.model.js");

/**
 * Controller Function to Create a New Movie
 * @returns moive created
 */

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
    const movie = await Movie.findById(req.params.id);

    if(!movie){
      
    }
     return res.status(200).json({
      success: true,
      error: false,
      message: "Successfully Fetched the Movie details",
      data: movie,
    });
  } catch (error) {
      return res.status(500).json({
      success: false,
      error: error,
      message: "Something Want Wrong",
      data: {},
    });
  }
}

module.exports = {
  createMovie,
  deleteMovie,
  getMovie
};
