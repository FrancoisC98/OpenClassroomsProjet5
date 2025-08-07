function Rating({ rating }) {
    console.log('note reçue :', rating)

  const maxRating = 5 // max d'étoiles a afficher
  const stars = []
  const numericRating = parseInt(rating) // on convertit la chaîne de caractère en entier

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <span key={i} className={i <= numericRating ? "star filled" : "star"}>
        ★
      </span>
    )
  }

  return <div className="rating">{stars}</div>
}

export default Rating