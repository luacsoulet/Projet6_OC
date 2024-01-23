import Card from '../../components/Card'
import KasaData from '../../data/data.json'
import '../../styles/_home.sass'
import CliffImg from '../../assets/home-background.png'

function Home() {
  return (
    <div className="home">
      <div className="home__img">
        <img src={CliffImg} alt="Falaise pour la page d'accueil" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="home__gallery">
        {KasaData.map((element) => (
          <Card label={element.title} cover={element.cover} id={element.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
