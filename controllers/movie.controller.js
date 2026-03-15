const { response } = require("express");
const Movie = require("../models/movie.model.js");
const movieService = require("../services/movie.services.js");

const {successResponseBody,errResponseBody} = require("../utils/responsebody.js")

/**
 * Controller Function to Create a New Movie
 * @returns moive created
 */


const createMovie = async (req, res) => {
  try {
    const movie = await movieService.createMovie(req.body);

    successResponseBody.data = movie;
    successResponseBody.message = "Successfully created the movie";

    return res.status(200).json(successResponseBody);
  } catch (error) {
    console.log(err);
    return res.status(500).json(errResponseBody);
  }
};

/**
 * Controller Function to Delete  a Single Movie
 * @returns moive deleted
 */

const deleteMovie = async (req, res) => {
  try {
    const response = await movieService.deleteMovie(req.params.id );

    successResponseBody.data = response;
    successResponseBody.message = "Successfully Deleted the movie";

    return res.status(200).json(successResponseBody);
  } catch (error) {
    return res.status(500).json(errResponseBody);
  }
};

/**
 * Controller Function to Get a Single Movie
 * @returns moive Get
 */

const getMovie = async (req, res) => {
  try {
    const response = await movieService.getMovieById(req.params.id);

    if (response.err) {
      errResponseBody.err = response.err;
      return res.status(response.code).json(errResponseBody);
    }

    successResponseBody.data = response;
    return res.status(200).json(successResponseBody);

  } catch (error) {
    return res.status(500).json(errResponseBody);
  }
};

module.exports = {
  createMovie,
  deleteMovie,
  getMovie,
};
