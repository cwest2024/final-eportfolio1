function CardMedia({ image, alt }) {
  return (
    <div className="card-media">
      <img src={image} alt={alt} className="card-image" />
    </div>
  )
}

export default CardMedia