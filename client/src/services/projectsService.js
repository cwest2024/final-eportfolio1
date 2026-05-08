// Import the reusable Axios backend connection.
import api from './api'

// GET all projects from MongoDB through Express.
export async function getProjects() {
  const response = await api.get('/api/projects')
  return response.data
}

// GET one project by ID.
export async function getProjectById(id) {
  const response = await api.get(`/api/projects/${id}`)
  return response.data
}

// POST a new project to MongoDB.
export async function createProject(projectData) {
  const response = await api.post('/api/projects', projectData)
  return response.data
}

// PUT update an existing project in MongoDB.
export async function updateProject(id, projectData) {
  const response = await api.put(`/api/projects/${id}`, projectData)
  return response.data
}

// DELETE a project from MongoDB.
export async function deleteProject(id) {
  const response = await api.delete(`/api/projects/${id}`)
  return response.data
}