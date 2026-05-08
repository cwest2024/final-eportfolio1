// Import Axios so React can make HTTP requests to the backend.
import axios from 'axios'

// Create one reusable Axios instance.
// The backend URL comes from the client .env file.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

// Export this so other files can use the same backend connection.
export default api