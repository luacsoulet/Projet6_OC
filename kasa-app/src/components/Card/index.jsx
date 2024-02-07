import '../../styles/_card.sass'

/* Création du composant Card en récupérant en propos le label qui est le texte associé à l'annonce, l'image de cover et l'id de l'annonce */
function Card({ label, cover, id }) {
  return (
    <div className="card" id={id}>
      <img className="card__img" src={cover} alt={label} />
      <p className="card__title">{label}</p>
    </div>
  )
}

export default Card
