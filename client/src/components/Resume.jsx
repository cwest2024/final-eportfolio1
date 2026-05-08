import { useEffect } from 'react'

function Resume({ resume, setPageMessage }) {
  useEffect(() => {
    setPageMessage('View my professional experience, education, and qualifications.')
  }, [setPageMessage])

  return (
    <section id="resume">
      <h2 className="page-heading">Resume</h2>

      <article>
        <h3>Professional Summary</h3>
        <p>{resume.summary}</p>
      </article>

      <article>
        <h3>Education</h3>
        <table>
          <tbody>
            {resume.education.map((item, index) => (
              <tr key={index}>
                <td>{item.school}</td>
                <td>{item.degree}</td>
                <td>{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article>
        <h3>Work Experience</h3>
        <table>
          <tbody>
            {resume.experience.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article>
        <h3>Skills</h3>
        <ul className="resume-list">
          {resume.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </article>

      <article>
        <h3>Extracurricular Activities / Professional Development</h3>
        <ul className="resume-list">
          {resume.professionalDevelopment.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default Resume