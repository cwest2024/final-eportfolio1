import ProjectList from '../components/ProjectList'

function Projects() {
  return (
    <section className="page-section">
      <p className="eyebrow">Projects</p>

      <h2>Dynamic Portfolio Projects</h2>

      <p className="section-intro">
        These projects are not hardcoded in React. They are fetched from MongoDB
        through a Node.js and Express API using Axios.
      </p>

      <ProjectList />
    </section>
  )
}

export default Projects