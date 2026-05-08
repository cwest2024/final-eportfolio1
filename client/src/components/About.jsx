import { useEffect } from 'react'

function About({ about, setPageMessage }) {
  useEffect(() => {
    setPageMessage('Learn more about my background and experience.')
  }, [setPageMessage])

  return (
    <section id="about">
      <h2 className="page-heading">About Me</h2>

      {about.aboutParagraphs.map((paragraph, index) => (
        <article key={index}>
          <p>{paragraph}</p>
        </article>
      ))}

      <article>
        <h3>Professional Links</h3>
        <ul className="contact-list">
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </article>
    </section>
  )
}

export default About