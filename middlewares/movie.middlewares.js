const { validate } = require("../models/movie.model");

const badRequestResponse = {
  success: false,
  err: "",
  data: {},
  message: "Malformed Request | Bad Request",
};

const validateMOvieCreateRequest = async (req, res, next) => {
  // validate the movie name
  if (!req.body.name) {
    badRequestResponse.err =
      "The name of the movie is not present in the request sent";
    return res.status(400).json(badRequestResponse);
  }

  // validate the movie  description
  if (!req.body.description) {
    badRequestResponse.err =
      "The description of the movie is not present in the request sent";
    return res.status(400).json(badRequestResponse);
  }

  // validate the movie cast
  if (!req.body.cast || !(req.body.cast instanceof Array) || req.body.cast.length <= 0) {
    badRequestResponse.err =
      "The cast of the movie is not present in the request sent";
    return res.status(400).json(badRequestResponse);
  }

 //validate the movie trailerUrl
  if (!req.body.trailerUrl) {
    badRequestResponse.err =
      "The trailer URL of the movie is not present in the request sent";
    return res.status(400).json(badRequestResponse);
  }

  // validate the movie releaseDate
  if(!req.body.releaseDate){
    badRequestResponse.err =
      "The release date of the movie is not present in the request sent";
    return res.status(400).json(badRequestResponse);  
  }

  // validate the movie director
  if(!req.body.director){
    badRequestResponse.err =
      "The director of the movie is not present in the request sent";
    return res.status(400).json(badRequestResponse);  
  }
  next();
};

module.exports = {
  validateMOvieCreateRequest,
};
