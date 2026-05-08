// Load environment variables.
require('dotenv').config()

// Import dependencies.
const express = require('express')
const cors = require('cors')
const path = require('path')

// Import MongoDB connection.
const connectDB = require('./config/db')

// Import routes and middleware.
const projectRoutes = require('./routes/projectRoutes')
const contactRoutes = require('./routes/contactRoutes')
const errorHandler = require('./middleware/errorHandler')

// Create Express app.
const app = express()

// Use PORT from environment or default to 3001.
const PORT = process.env.PORT || 3001

// Connect to MongoDB.
connectDB()

// Allowed frontend URLs.
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173'
].filter(Boolean)

// Enable CORS.
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests from browser, Postman, or server-to-server.
    if (!origin) return callback(null, true)

    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  },
  credentials: true
}))

// Parse JSON request bodies.
app.use(express.json())

// Parse form submissions.
app.use(express.urlencoded({ extended: true }))

// Request logging middleware.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

// Serve public static files from server/public.
app.use(express.static(path.join(__dirname, 'public')))

// Root API route.
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Final MERN ePortfolio API is running.'
  })
})

// Health check route.
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'healthy',
    database: 'MongoDB via Mongoose',
    timestamp: new Date().toISOString()
  })
})

// Project CRUD routes.
app.use('/api/projects', projectRoutes)

// Contact form route.
app.use('/api/contact', contactRoutes)

// 404 route.
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found.'
  })
})

// Error handler.
app.use(errorHandler)

// Start server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})