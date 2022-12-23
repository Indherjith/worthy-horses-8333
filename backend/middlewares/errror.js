const ErrorHandler = require("../utils/error.handler");


const errMiddleware =( err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server error";

    // in case we find or put wrong mongo Id.
    if( err.name === "CastError"){
        const message = `Resource not found. Invalid: ${err.path}`
        err = new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        success : true,
        error : err.message
    })
}

module.exports = {errMiddleware}