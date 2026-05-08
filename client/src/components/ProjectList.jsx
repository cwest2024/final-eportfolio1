import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { getProjects } from '../api/apiService'

function ProjectList() {
  // This stores the projects coming from MongoDB through the backend API.
  const [projects, setProjects] = useState([])

  // This shows a loading message while the request is running.
  const [loading, setLoading] = useState(true)

  // This stores an error message if the request fails.
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProjects() {
      try {
        // Get project data from the Express backend.
        const projectData = await getProjects()

        // Save the project data in React state.
        setProjects(projectData)
      } catch (err) {
        // Show a helpful message if the backend or database is not working.
        setError('Unable to load projects. Please make sure the backend and MongoDB are connected.')
      } finally {
        // Stop the loading message.
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return <p>Loading projects from MongoDB...</p>
  }

  if (error) {
    return <p className="error-text">{error}</p>
  }

  if (projects.length === 0) {
    return <p>No projects found. Run the seed script to add project data.</p>
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList