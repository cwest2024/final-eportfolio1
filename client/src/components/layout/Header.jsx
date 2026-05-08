function Header({ children }) {
  return (
    <header>
      <div className="header-wrap">
        <h1 className="site-title">Collin West&apos;s ePortfolio</h1>
        {children}
      </div>
    </header>
  )
}

export default Header