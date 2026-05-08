function CardHeader({ title, subtitle, meta }) {
  return (
    <div className="card-header">
      <h3 className="card-title">{title}</h3>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      {meta && <p className="card-meta">{meta}</p>}
    </div>
  )
}

export default CardHeader