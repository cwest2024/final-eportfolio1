import Card from '../ui/Card/Card'
import CardHeader from '../ui/Card/CardHeader'
import CardMedia from '../ui/Card/CardMedia'
import CardBody from '../ui/Card/CardBody'
import CardFooter from '../ui/Card/CardFooter'
import useToggle from '../../hooks/useToggle'

function ProjectCard({ project }) {
  // This controls whether the full project description is shown.
  const [expanded, toggleExpanded] = useToggle(false)

  // Create a short version of the description for the default card view.
  const shortText =
    project.description && project.description.length > 160
      ? `${project.description.slice(0, 160)}...`
      : project.description

  return (
    <Card className="project-card">
      {/* Display the project image */}
      <CardMedia image={project.image} alt={project.alt || project.title} />

      {/* Display project title, caption, and category */}
      <CardHeader
        title={project.title}
        subtitle={project.caption}
        meta={project.category}
      />

      <CardBody>
        {/* Show the short or full description depending on state */}
        <p>{expanded ? project.description : shortText}</p>

        {/* Display tools as pill labels */}
        {project.tools && project.tools.length > 0 && (
          <ul className="tool-list">
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        )}
      </CardBody>

      <CardFooter>
        {/* Toggle description length */}
        <button type="button" onClick={toggleExpanded}>
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard