function Home() {
  return (
    <section className="page-section hero-section">
      {/* LEFT SIDE CONTENT */}
      <div className="hero-content">
        <p className="eyebrow">Final MERN Stack ePortfolio</p>

        <h2>
          Systems Engineer, Military Professional, and Full-Stack Development Student.
        </h2>

        <p>
          Welcome to my final MERN stack ePortfolio. This project combines a
          React frontend, an Express and Node.js backend, and a MongoDB database
          to demonstrate a complete full-stack web application.
        </p>

        <p>
          My background includes 15 years of military service and experience in
          systems engineering, leadership, technical operations, and mission-focused
          problem solving. Throughout my career, I have developed strong skills in
          communication, adaptability, systems support, and strategic thinking.
        </p>

        <p>
          This portfolio represents both my professional background and my continued
          growth in software development. It demonstrates how frontend interfaces,
          backend APIs, and databases work together in a real-world MERN stack
          application.
        </p>

        <div className="hero-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Mongoose</span>
          <span>REST APIs</span>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE/CARD */}
      <div className="hero-image-wrapper">
        <img
          src="/images/family_portrait.jpeg"
          alt="Collin West and family"
          className="hero-image"
        />

        <div className="hero-info-card">
          <h3>Portfolio Highlights</h3>

          <ul>
            <li>Full MERN stack architecture</li>
            <li>MongoDB database integration</li>
            <li>RESTful Express API</li>
            <li>Responsive React frontend</li>
            <li>Dynamic project cards</li>
            <li>Environment variable security</li>
            <li>Deployment-ready structure</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home