// Header receives currentPage and setCurrentPage from App.jsx.
// This allows the navigation buttons to switch pages without React Router.
function Header({ currentPage, setCurrentPage }) {
  const navItems = ['Home', 'About', 'Projects', 'Contact']

  return (
    <header className="site-header">
      <div className="header-inner">
        <div>
          <h1>Collin West</h1>
          <p>Systems Engineer • Military Professional • MERN ePortfolio</p>
        </div>

        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className={currentPage === item ? 'nav-link active' : 'nav-link'}
                  onClick={() => setCurrentPage(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header