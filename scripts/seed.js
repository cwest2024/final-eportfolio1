// Load environment variables from server/.env.
require('dotenv').config({ path: './server/.env' })

// Import the database connection from the server folder.
const connectDB = require('../server/config/db')

// Import the Project model from the server folder.
const Project = require('../server/models/Project')

// Starter project data for the final ePortfolio.
const starterProjects = [
  {
    title: 'JSON-Based Message Translation Software',
    category: 'Software Engineering Project',
    tools: ['Java', 'JavaFX', 'Spring Boot', 'REST API', 'JSON'],
    description: 'A software engineering project that translates structured message data into JSON-based formats. The project demonstrates frontend and backend planning, API communication, structured data handling, and modular application design.',
    image: '/images/project-1.jpg',
    alt: 'Code editor representing a JSON message translation software project',
    caption: 'Structured JSON message translation system.',
    featured: true
  },
  {
    title: 'Predictive Analysis and Forecasting Algorithm',
    category: 'Data and Analytics Project',
    tools: ['Python', 'Data Analysis', 'Algorithm Design', 'Forecasting'],
    description: 'A predictive analysis project focused on identifying patterns, evaluating trends, and supporting data-driven decision-making. The project highlights algorithmic thinking, analytical problem solving, and clear data interpretation.',
    image: '/images/project-2.jpg',
    alt: 'Data visualization representing predictive analysis and forecasting',
    caption: 'Algorithm-based forecasting and data analysis.',
    featured: true
  },
  {
    title: 'RESTful JSON API Development Project',
    category: 'Backend Development Project',
    tools: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Postman'],
    description: 'A backend development project that uses Express and MongoDB to manage structured project data through RESTful API routes. The API supports CRUD operations and demonstrates secure environment configuration and database integration.',
    image: '/images/project-3.jpg',
    alt: 'Server and API diagram representing RESTful backend development',
    caption: 'RESTful API connected to MongoDB.',
    featured: true
  }
]

async function seedDatabase() {
  try {
    // Connect to MongoDB.
    await connectDB()

    // Remove old project data.
    await Project.deleteMany({})
    console.log('Existing projects removed.')

    // Insert final project data.
    await Project.insertMany(starterProjects)
    console.log('Final project data inserted.')

    // Close database connection.
    await Project.db.close()
    console.log('Database connection closed.')
  } catch (error) {
    console.error('Seed error:', error.message)
    process.exit(1)
  }
}

seedDatabase()