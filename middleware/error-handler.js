import { StatusCodes } from "http-status-codes";
//express errorhandler looking for 4 parameters in the function
const errorHandlerMiddleware = (err, req, res, next) => {
  // console.log(err);
  //default generic error
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "there is something went wrong, try again later",
  };
  //for missing property error
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = err.message;
  }
  //for unique property error
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = `${Object.keys(err.keyValue).join(
      ","
    )} field should be unique`;
  }
  res.status(defaultError.statusCode).json({ message: defaultError.message });
};

export default errorHandlerMiddleware;
