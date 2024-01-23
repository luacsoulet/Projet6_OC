import '../../styles/_card.sass'

function Card({ label, cover, id }) {
  return (
    <div className="card" id={id}>
      <img className="card__img" src={cover} alt={label} />
      <p className="card__title">{label}</p>
    </div>
  )
}

export default Card
