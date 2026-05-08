# Week 7 Express + MongoDB Backend

## Purpose

This backend builds on the Week 6 Express backend by connecting project data to MongoDB using Mongoose.

The Projects section no longer depends on a local JSON file. Instead, project data is stored in MongoDB and returned to the React frontend through Express API routes.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS
- Express Validator
- Multer

## Environment Variables

Create a `.env` file inside the server folder.

Example:

PORT=3001
MONGO_URI=your_mongodb_connection_string_here
CLIENT_URL=http://localhost:5173

Do not submit real database credentials.

## Install Dependencies

npm install

## Seed the Database

npm run seed

This inserts three starting projects into MongoDB.

## Start the Server

node server.js

The server runs at:

http://localhost:3001

## API Routes

### GET /

Confirms that the server is running.

### GET /api/projects

Returns all projects from MongoDB.

### GET /api/projects/:id

Returns one project by MongoDB ID.

### POST /api/projects

Creates a new project.

Example JSON body:

{
  "title": "Example Project",
  "category": "Web Development",
  "tools": ["React", "Express", "MongoDB"],
  "description": "This is an example project.",
  "image": "/images/example.jpg",
  "alt": "Example project image",
  "caption": "Example project caption"
}

### PUT /api/projects/:id

Updates an existing project.

### DELETE /api/projects/:id

Deletes a project.

### POST /api/contact

Accepts contact form submissions from the React frontend and validates input.

## React Integration

The React frontend uses Axios to fetch project data from:

http://localhost:3001/api/projects

The Projects page dynamically renders the projects returned from MongoDB.