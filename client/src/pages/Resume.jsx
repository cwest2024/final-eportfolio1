import resumeData from '../data/resume.json'
import ResumeCard from '../components/cards/ResumeCard'

function Resume() {
  return (
    <section id="resume">
      <h2 className="page-heading">Resume</h2>

      <h3 className="section-label">Education</h3>
      <div className="card-grid">
        {resumeData.education.map((item, index) => (
          <ResumeCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            meta={item.meta}
            bullets={item.bullets}
          />
        ))}
      </div>

      <h3 className="section-label">Work Experience</h3>
      <div className="card-grid">
        {resumeData.experience.map((item, index) => (
          <ResumeCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            meta={item.meta}
            bullets={item.bullets}
          />
        ))}
      </div>

      <h3 className="section-label">Skills</h3>
      <div className="card-grid">
        <ResumeCard
          title={resumeData.skillsCard.title}
          subtitle={resumeData.skillsCard.subtitle}
          meta={resumeData.skillsCard.meta}
          bullets={resumeData.skillsCard.bullets}
        />
      </div>
    </section>
  )
}

export default Resume