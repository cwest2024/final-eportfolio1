// Imports the built-in Node.js file system module.
// I use this to read and write files.
import fs from 'fs'

// Imports the built-in path module.
// i use this to safely build file paths.
import path from 'path'

// Importsthe fileURLToPath so I can figure out the current file location
import { fileURLToPath } from 'url'

// Re-creates __filename and __dirname for ES module usage.
// This tells Node where this script is located.
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Builds the full path to the original JSON file in the root data folder.
const sourceFilePath = path.join(__dirname, '../data/projects.json')

// Builds the full path to the destination file inside public/data.
// React can fetch files from the public folder in the browser.
const destinationFilePath = path.join(__dirname, '../public/data/projects.json')

try {
  // Reads the original projects.json file as plain text.
  const rawData = fs.readFileSync(sourceFilePath, 'utf8')

  // Converts the JSON text into a JavaScript array of objects.
  const projects = JSON.parse(rawData)

  // Logs the parsed project data to the terminal.
  // This proves Node.js successfully read and parsed the JSON file.
  console.log('Project data loaded successfully:')
  console.log(projects)

  // Writes the same data into public/data/projects.json.
  // This makes the file available to the React app through fetch().
  fs.writeFileSync(destinationFilePath, JSON.stringify(projects, null, 2))

  // Shows a success message in the terminal.
  console.log('\nprojects.json was copied to public/data/projects.json successfully.')
} catch (error) {
  // If there is a problem reading, parsing, or writing the file, this will display a readable error message.
  console.error('Error reading or copying project data:', error.message)
}