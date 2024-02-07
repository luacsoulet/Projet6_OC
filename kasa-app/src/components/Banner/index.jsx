import '../../styles/_banner.sass'

/* Création du composant banner en récupérant en propos l'image de cover et le texte si il y en a */
function Banner({ cover, content }) {
  return (
    <div className="banner">
      <img
        className="banner_img"
        src={cover}
        alt="Falaise pour la page d'accueil"
      />
      <p className="banner_content">{content}</p>
    </div>
  )
}

/* Définition des valeurs de props par défaut */
Banner.defaultProps = {
  cover: '',
  content: '',
}

export default Banner
