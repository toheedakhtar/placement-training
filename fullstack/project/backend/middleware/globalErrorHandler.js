const errorHandler = (err, req, res, next) => {
    let statusCode = 500 || err.statusCode;
    let errorMessage = err.message || "Internal Server error";
    if(err.name === "ValidationError"){
        const errors = Object.values(err.errors).map(error => error.message);
        statusCode = 400;
        errorMessage = errors;
    }
    

    res.status(statusCode).send({status: "fail", message:errorMessage});
}

module.exports = errorHandler;