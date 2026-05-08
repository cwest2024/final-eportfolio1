// Import Express so we can create a route file.
const express = require('express')

// Create a router object.
const router = express.Router()

// POST /api/contact
// This receives contact form submissions from the React frontend.
router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body

  // Basic backend validation.
  if (!name || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Name is required and must be at least 2 characters.'
    })
  }

  if (!email || !email.includes('@')) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required.'
    })
  }

  if (!message || message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Message must be at least 10 characters.'
    })
  }

  // Log the form submission in the backend terminal.
  // In a real production app, this could be saved to MongoDB or sent by email.
  console.log('Contact form submitted:')
  console.log({
    name,
    email,
    phone,
    message
  })

  return res.status(200).json({
    success: true,
    message: `Thank you, ${name}. Your message was received successfully.`
  })
})

module.exports = router