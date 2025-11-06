// by default, the error middleware from express is html page. But we want to send json error response instead

/**
 * @desc not found middleware
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */ 
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
} 

/**
 * @desc custom error middleware
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message

// this is the mongoose error
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message = 'Resource not found'
    statusCode = 404
  }

  res.status(statusCode).json({
    message, 
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

export {
    notFound, errorHandler
} 