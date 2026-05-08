import { useEffect } from 'react'

function Skills({ skills, setPageMessage }) {
  useEffect(() => {
    setPageMessage('Explore the skills and abilities that support my professional work.')
  }, [setPageMessage])

  return (
    <section id="skills">
      <h2 className="page-heading">Marketable Skills and Abilities</h2>

      {skills.map((group, index) => (
        <article key={index}>
          <h3>{group.title}</h3>
          <ul className="skills-list">
            {group.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Skills