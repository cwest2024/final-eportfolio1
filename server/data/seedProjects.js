// Load environment variables from the .env file.
require('dotenv').config()

// Import mongoose so this script can connect to MongoDB.
const mongoose = require('mongoose')

// Import the Project model so we can insert project documents.
const Project = require('../models/Project')

// These are the starting projects that will be inserted into MongoDB.
const starterProjects = [
  {
    title: 'JSON-Based Message Translation Software',
    category: 'Software Engineering Project',
    tools: ['Python', 'JSON', 'Software Design Principles'],
    description: 'This project focused on the design and development of a software engineering solution for message translation. The application processes structured JSON message data and translates it into a readable and usable format across different systems or user groups.',
    image: '/images/project-1.jpg',
    alt: 'Message translation project image',
    caption: 'Structured JSON message translation software solution.'
  },
  {
    title: 'Predictive Analysis and Forecasting Algorithm',
    category: 'Data and Analytics Project',
    tools: ['Python', 'Machine Learning', 'Data Analysis'],
    description: 'This project involved developing predictive analysis algorithms to identify trends, evaluate patterns, and support data-driven decision-making.',
    image: '/images/project-2.jpg',
    alt: 'Predictive analysis project image',
    caption: 'Algorithm-based forecasting and data analysis project.'
  },
  {
    title: 'RESTful JSON API Development Project',
    category: 'Backend Development Project',
    tools: ['Python', 'RESTful APIs', 'JSON'],
    description: 'This project focused on building a RESTful JSON API to support structured communication between systems.',
    image: '/images/project-3.jpg',
    alt: 'RESTful JSON API project image',
    caption: 'Backend API project for structured data communication.'
  }
]

// This function connects to MongoDB and inserts the starter projects.
async function seedProjects() {
  try {
    // Connect to MongoDB using the connection string from .env.
    await mongoose.connect(process.env.MONGO_URI)

    console.log('MongoDB connected for seeding.')

    // Delete existing projects to avoid duplicates.
    await Project.deleteMany({})

    console.log('Old project data removed.')

    // Insert the starter projects into MongoDB.
    await Project.insertMany(starterProjects)

    console.log('Starter project data inserted successfully.')

    // Close the MongoDB connection.
    await mongoose.connection.close()

    console.log('MongoDB connection closed.')
  } catch (error) {
    // Show the error if seeding fails.
    console.error('Error seeding project data:', error.message)

    // Close database connection if possible.
    await mongoose.connection.close()

    // Stop the script.
    process.exit(1)
  }
}

// Run the seed function.
seedProjects()