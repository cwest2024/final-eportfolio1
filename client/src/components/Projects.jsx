import { useEffect } from 'react'

function Projects({ projects, setPageMessage }) {
  useEffect(() => {
    setPageMessage('Review technical projects focused on software engineering and development.')
  }, [setPageMessage])

  return (
    <section id="projects">
      <h2 className="page-heading">Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <figure>
              <img src={project.image} alt={project.alt} />
              <figcaption>{project.caption}</figcaption>
            </figure>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects