// Import Axios so the React frontend can communicate with the Express backend.
import axios from 'axios'

// This base URL comes from the client's .env file.
// Local example: http://localhost:3001
// Deployed example: https://your-backend-name.onrender.com
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'

// Create one reusable Axios instance for the whole frontend.
const api = axios.create({
  baseURL: API_BASE_URL
})

// GET all projects from the backend.
// The backend returns an object like:
// { success: true, count: 3, data: [...] }
export async function getProjects() {
  const response = await api.get('/api/projects')
  return response.data.data
}

// GET one project by ID.
export async function getProjectById(id) {
  const response = await api.get(`/api/projects/${id}`)
  return response.data.data
}

// POST a new project to MongoDB.
export async function createProject(projectData) {
  const response = await api.post('/api/projects', projectData)
  return response.data.data
}

// PUT update an existing project in MongoDB.
export async function updateProject(id, projectData) {
  const response = await api.put(`/api/projects/${id}`, projectData)
  return response.data.data
}

// DELETE a project from MongoDB.
export async function deleteProject(id) {
  const response = await api.delete(`/api/projects/${id}`)
  return response.data
}

// POST contact form data to the Express backend.
export async function submitContactForm(formData) {
  const response = await api.post('/api/contact', formData)
  return response.data
}

// Export the Axios instance in case other files need it.
export default api