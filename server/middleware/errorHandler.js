// Centralized error handler for the Express backend.
function errorHandler(err, req, res, next) {
  console.error(err)

  // Mongoose validation errors.
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((field) => field.message)

    return res.status(400).json({
      success: false,
      error: 'Validation error.',
      messages
    })
  }

  // Invalid MongoDB ID errors.
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      error: 'Invalid project ID.'
    })
  }

  return res.status(500).json({
    success: false,
    error: 'Something went wrong on the server.'
  })
}

module.exports = errorHandler