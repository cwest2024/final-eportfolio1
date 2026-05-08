function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Collin West. Final MERN Stack ePortfolio.
      </p>
      <p>
        Built with React, Node.js, Express, MongoDB, and Mongoose.
      </p>
    </footer>
  )
}

export default Footer