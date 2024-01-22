import CliffImg from '../../assets/home-background.png'
import '../../styles/_home.sass'

function Home() {
  return (
    <div className="home">
      <div className="home__img">
        <img src={CliffImg} alt="Falaise pour la page d'accueil" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  )
}

export default Home
