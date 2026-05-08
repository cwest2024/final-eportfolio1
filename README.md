# Final MERN ePortfolio

## Overview

This final project demonstrates a complete MERN stack ePortfolio.

The application includes:

- React frontend built with Vite
- Node.js and Express backend
- MongoDB database
- Mongoose schema and validation
- CRUD routes for project data
- Dynamic project cards
- Basic client and server tests
- Deployment configuration for Render

## Live Links

Deployed Frontend URL:

Add your live frontend link here.

Deployed Backend API URL:

Add your live backend link here.

GitHub Repository:

Add your GitHub link here.

Demo Video:

Add your demo video link here.

## Folder Structure

final-eportfolio/
├── README.md
├── .gitignore
├── package.json
├── docs/
│   └── deployment-notes.md
├── client/
├── server/
├── scripts/
│   └── seed.js
├── .env.example
└── render.yaml

## Technologies Used

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

### Testing

- Vitest
- Jest

## Environment Variables

### Server

Create a `.env` file inside the server folder:

PORT=3001
MONGO_URI=your_mongodb_connection_string_here
CLIENT_URL=http://localhost:5173

### Client

Create a `.env` file inside the client folder:

VITE_API_BASE_URL=http://localhost:3001

## Local Installation

Install all dependencies:

npm run install:all

## Seed Database

Run:

npm run seed

## Run Locally

Start backend:

npm run server

Start frontend:

npm run client

## API Routes

### Health

GET /api/health

### Projects

GET /api/projects

GET /api/projects/:id

POST /api/projects

PUT /api/projects/:id

DELETE /api/projects/:id

## Testing

Run:

npm test

## Deployment

This project is configured for Render.

The backend should be deployed as a Web Service.

The frontend should be deployed as a Static Site.

Environment variables are configured in Render and are not committed to GitHub.

## Reflection

This final project demonstrates how the frontend, backend, and database work together in a MERN stack application. A major learning point was moving from static data to a live MongoDB database while keeping the frontend dynamic, responsive, and deployable.