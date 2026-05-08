import { useState } from 'react'
import { submitContactForm } from '../api/apiService'

function ContactForm() {
  // Store contact form input values.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Store frontend validation errors.
  const [errors, setErrors] = useState({})

  // Store success or backend response messages.
  const [successMessage, setSuccessMessage] = useState('')

  // Store a general error if the backend request fails.
  const [serverError, setServerError] = useState('')

  // Email pattern checks for a basic valid email format.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Phone pattern allows numbers, spaces, parentheses, dashes, and plus signs.
  const phonePattern = /^[0-9()\-\s+]{7,20}$/

  // Validate the form before sending it to the backend.
  function validateForm() {
    const newErrors = {}

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name.'
    }

    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (formData.phone.trim() && !phonePattern.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.'
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message of at least 10 characters.'
    }

    return newErrors
  }

  // Update state when the user types into the form.
  function handleChange(event) {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }))

    setSuccessMessage('')
    setServerError('')
  }

  // Submit form data to the Express backend.
  async function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccessMessage('')
      setServerError('')
      return
    }

    try {
      const response = await submitContactForm(formData)

      setSuccessMessage(response.message || 'Your message was submitted successfully.')
      setServerError('')

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      setErrors({})
    } catch (error) {
      setServerError('The message could not be submitted. Please make sure the backend is running.')
      setSuccessMessage('')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.name && <small className="error-message">{errors.name}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />
        {errors.email && <small className="error-message">{errors.email}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number Optional</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        {errors.phone && <small className="error-message">{errors.phone}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
        />
        {errors.message && <small className="error-message">{errors.message}</small>}
      </div>

      <button type="submit" className="card-button">
        Send Message
      </button>

      {successMessage && (
        <p className="form-status" aria-live="polite">
          {successMessage}
        </p>
      )}

      {serverError && (
        <p className="error-text" aria-live="polite">
          {serverError}
        </p>
      )}
    </form>
  )
}

export default ContactForm