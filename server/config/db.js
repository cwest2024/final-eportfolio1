// Import Mongoose so the backend can connect to MongoDB.
const mongoose = require('mongoose')

// This function connects the Express backend to MongoDB.
async function connectDB() {
  try {
    // The MongoDB URI comes from environment variables.
    // This keeps the database password out of the code.
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`)

    // Stop the server if MongoDB cannot connect.
    process.exit(1)
  }
}

module.exports = connectDB