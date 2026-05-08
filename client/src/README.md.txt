@ Collin West Week 5 ePortfolio

This project expands an existing React ePortfolio by integrating Node.js, structured JSON data, and a public API.

# Features
- Project data is stored in a structured JSON file
- A Node.js script reads and parses the JSON file
- Node copies the JSON data into the public folder so React can load it dynamically
- Axios is used in Node.js to fetch data from a public API
- API results are saved locally and displayed in the React portfolio
- The portfolio includes responsive project cards and a personalized API content section

# Public API Used
This project uses NASA's Astronomy Picture of the Day (APOD) API to add a creative and personalized feature to the homepage.

# How to Run the Project

# 1. Install dependencies
npm install

# 2. Prepare the JSON and API data
npm run prepare-data

# 3. Start the development server
npm run dev

# Files Added for Week 5
- data/projects.json
- scripts/readProjects.js
- scripts/fetchApiData.js
- public/data/projects.json
- public/data/apod.json
- output/apiResults.json
- src/components/cards/ApiCard.jsx

# Explanation
The `readProjects.js` script reads the root `data/projects.json` file, parses it, logs the results, and copies it into `public/data/projects.json`.

The `fetchApiData.js` script uses Axios to request data from NASA's APOD API, then saves the response to both `output/apiResults.json` and `public/data/apod.json`.

React then loads both JSON files dynamically with `fetch()` and displays them in the portfolio.