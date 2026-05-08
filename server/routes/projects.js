// Import Express so we can create a router.
const express = require('express')

// Import fs so Node can read the projects.json file.
const fs = require('fs')

// Import path so we can safely build the file path.
const path = require('path')

// Create an Express router.
// A router keeps route code organized outside of server.js.
const router = express.Router()

// GET /api/projects
// This route reads the projects.json file and sends it to the React frontend.
router.get('/', (req, res) => {
  // Build the full path to data/projects.json.
  const projectsFilePath = path.join(__dirname, '../data/projects.json')

  // Read the JSON file.
  fs.readFile(projectsFilePath, 'utf8', (err, data) => {
    // If the file cannot be read, send an error response.
    if (err) {
      return res.status(500).json({
        error: 'Unable to read project data.'
      })
    }

    try {
      // Convert the JSON text into JavaScript data.
      const projects = JSON.parse(data)

      // Send the project data back to the frontend as JSON.
      res.json(projects)
    } catch (parseError) {
      // If the JSON file has invalid formatting, send an error response.
      res.status(500).json({
        error: 'Project data is not valid JSON.'
      })
    }
  })
})

// Export the router so server.js can use it.
module.exports = router