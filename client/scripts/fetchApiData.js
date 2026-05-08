// Imports Axios so Node.js can make HTTP requests to a public API.
import axios from 'axios'

// Imports fs so we can save the API result to a file.
import fs from 'fs'

// Imports path so we can safely build file locations.
import path from 'path'

// Import fileURLToPath because we are using ES modules.
import { fileURLToPath } from 'url'

// Re-creates __filename and __dirname so we know where this file lives.
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// This is where I will save the API result for proof/output.
const outputFilePath = path.join(__dirname, '../output/apiResults.json')

// This is where I will save the API result for React to load.
const publicFilePath = path.join(__dirname, '../public/data/apod.json')

// NASA APOD API endpoint.
const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

// Creates an async function so we can use await with Axios.
async function fetchApiData() {
  try {
    // Sends a GET request to the NASA API.
    const response = await axios.get(apiUrl)

    // Stores the returned API data.
    const apodData = response.data

    // Logs the data to the terminal so we can see the API worked.
    console.log('NASA APOD data fetched successfully:')
    console.log(apodData)

    // Saves the API response into the output folder.
    fs.writeFileSync(outputFilePath, JSON.stringify(apodData, null, 2))

    // Saves the same data into public/data so React can display it.
    fs.writeFileSync(publicFilePath, JSON.stringify(apodData, null, 2))

    // Shows a success message in the terminal.
    console.log('\nAPI data saved to output/apiResults.json and public/data/apod.json successfully.')
  } catch (error) {
    // If the API request fails, show the error clearly.
    console.error('Error fetching API data:', error.message)
  }
}

// Runs the function.
fetchApiData()