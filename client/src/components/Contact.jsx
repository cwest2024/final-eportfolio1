import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <section className="page-section">
      <p className="eyebrow">Contact</p>

      <h2>Contact Me</h2>

      <p>
        Feel free to reach out with any questions, opportunities, or professional
        connections related to systems engineering, technical leadership, or this
        MERN stack ePortfolio project.
      </p>

      <div className="contact-layout">
        <div className="contact-card">
          <h3>Contact Information</h3>

          <p>
            Email: cwest2024@my.fit.edu
          </p>

          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>

          <p>
            GitHub:{' '}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View GitHub
            </a>
          </p>

          <h3>Project Summary</h3>

          <p>
            This final ePortfolio connects a React frontend, an Express backend,
            and a MongoDB database into one full MERN stack application.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact