// Import Express so we can create a router.
const express = require('express')

// Import multer.
// Multer lets Express handle optional file uploads.
const multer = require('multer')

// Import validationResult.
// This checks whether express-validator found any form errors.
const { validationResult } = require('express-validator')

// Import our contact form validation rules.
const { contactValidationRules } = require('../utils/validators')

// Create the Express router.
const router = express.Router()

// Configure multer to save uploaded files in the uploads folder.
const upload = multer({
  dest: 'uploads/'
})

// POST /api/contact
// This route receives contact form submissions from the React frontend.
// upload.single('attachment') allows the form to optionally upload one file.
router.post('/', upload.single('attachment'), contactValidationRules, (req, res) => {
  // Check validation results from express-validator.
  const errors = validationResult(req)

  // If validation errors exist, return them to React.
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    })
  }

  // Get the cleaned form data from req.body.
  const { name, email, message } = req.body

  // If a file was uploaded, store basic file information.
  const uploadedFile = req.file
    ? {
        originalName: req.file.originalname,
        savedName: req.file.filename,
        path: req.file.path
      }
    : null

  // Log the contact form submission in the backend terminal.
  // In a real application, this could be saved to a database.
  console.log('New contact form submission:')
  console.log({
    name,
    email,
    message,
    uploadedFile
  })

  // Send a success response back to React.
  res.status(200).json({
    success: true,
    message: 'Contact form submitted successfully.',
    data: {
      name,
      email,
      message,
      uploadedFile
    }
  })
})

// Export the router so server.js can use it.
module.exports = router