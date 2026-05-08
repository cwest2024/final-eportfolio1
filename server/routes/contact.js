const express = require('express')
const multer = require('multer')
const { validationResult } = require('express-validator')
const { contactValidationRules } = require('../utils/validators')

const router = express.Router()

const upload = multer({
  dest: 'uploads/'
})

router.post('/', upload.single('attachment'), contactValidationRules, (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    })
  }

  const { name, email, message } = req.body

  res.status(200).json({
    success: true,
    message: 'Contact form submitted successfully.',
    data: {
      name,
      email,
      message
    }
  })
})

module.exports = router