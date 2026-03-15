const errResponseBody = {
  err: {},
  data: {},
  message: "Something Want Wrong, cnanot process the request",
  success: false,
};
const successResponseBody = {
  err: {},
  data: {},
  message: "Successfully processed the request",
  success: true,
};


module.exports = {
  successResponseBody,
  errResponseBody
}