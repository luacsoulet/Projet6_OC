import '../../styles/_banner.sass'
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

Banner.defaultProps = {
  cover: '',
  content: '',
}

export default Banner
