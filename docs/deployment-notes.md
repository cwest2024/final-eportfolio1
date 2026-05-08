# Deployment Notes

## Platform

This final MERN ePortfolio is prepared for deployment using Render.

## Backend Deployment

The backend is deployed as a Render Web Service.

Settings:

- Root Directory: server
- Build Command: npm install
- Start Command: npm start

Required backend environment variables:

- PORT
- MONGO_URI
- CLIENT_URL

## Frontend Deployment

The frontend is deployed as a Render Static Site.

Settings:

- Root Directory: client
- Build Command: npm install && npm run build
- Publish Directory: dist

Required frontend environment variable:

- VITE_API_BASE_URL

## Database

MongoDB Atlas is used for the database.

The backend connects to MongoDB using Mongoose and the MONGO_URI environment variable.

## Production Flow

React frontend → Express backend API → MongoDB Atlas