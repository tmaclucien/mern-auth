// @des by default, the error middleware from express is html page
// @desc But we want to send json error response instead 
const notFound = (req, res, next) => {
  console.log(222)
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
} 

// @desc custom error middleware
const errorHandler = (err, req, res, next) => {
  console.log(333)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message

// mongoose error
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