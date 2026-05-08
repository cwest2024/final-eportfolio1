import { useState } from 'react'

function ProjectCard({ project }) {
  // This state controls whether the full project description is shown.
  const [expanded, setExpanded] = useState(false)

  // Create a shorter version of the description for the card preview.
  const shortDescription =
    project.description && project.description.length > 170
      ? `${project.description.slice(0, 170)}...`
      : project.description

  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.alt || project.title}
        className="project-image"
      />

      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>

        {project.caption && (
          <p className="project-caption">{project.caption}</p>
        )}

        <p>
          {expanded ? project.description : shortDescription}
        </p>

        {project.tools && project.tools.length > 0 && (
          <ul className="tool-list" aria-label={`Tools used for ${project.title}`}>
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        )}

        <button
          type="button"
          className="card-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </article>
  )
}

export default ProjectCard