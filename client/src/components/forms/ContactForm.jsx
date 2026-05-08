import { useState } from 'react'
import api from '../../services/api'

function ContactForm() {
  // Store form input values.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Store optional uploaded file.
  const [attachment, setAttachment] = useState(null)

  // Store a success or general error message.
  const [statusMessage, setStatusMessage] = useState('')

  // Store validation errors returned from Express.
  const [errors, setErrors] = useState([])

  // Update form data when the user types.
  function handleChange(event) {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  // Store the selected file when the user uploads one.
  function handleFileChange(event) {
    setAttachment(event.target.files[0])
  }

  // Submit the form to the Express backend.
  async function handleSubmit(event) {
    event.preventDefault()

    // Clear old messages before submitting again.
    setStatusMessage('')
    setErrors([])

    // FormData allows us to send text fields and an optional file together.
    const submissionData = new FormData()
    submissionData.append('name', formData.name)
    submissionData.append('email', formData.email)
    submissionData.append('message', formData.message)

    // Add optional file if one was selected.
    if (attachment) {
      submissionData.append('attachment', attachment)
    }

    try {
      // Send the form submission to:
      // http://localhost:3001/api/contact
      const response = await api.post('/api/contact', submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      // Show success message from backend.
      setStatusMessage(response.data.message)

      // Clear the form after successful submission.
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      // Clear selected attachment.
      setAttachment(null)
    } catch (err) {
      // If backend validation fails, display those validation errors.
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors)
      } else {
        setStatusMessage('Something went wrong. Please make sure the Express backend is running.')
      }
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          rows="6"
        />
      </div>

      <div className="form-group">
        <label htmlFor="attachment">Optional File Upload</label>

        <input
          id="attachment"
          name="attachment"
          type="file"
          onChange={handleFileChange}
        />
      </div>

      <button type="submit">Send Message</button>

      {statusMessage && <p className="form-status">{statusMessage}</p>}

      {errors.length > 0 && (
        <ul className="form-errors">
          {errors.map((error, index) => (
            <li key={index}>{error.msg}</li>
          ))}
        </ul>
      )}
    </form>
  )
}

export default ContactForm