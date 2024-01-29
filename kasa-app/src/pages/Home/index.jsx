import Card from '../../components/Card'
import Banner from '../../components/Banner'
import KasaData from '../../data/data.json'
import '../../styles/_home.sass'
import CliffImg from '../../assets/home-background.png'

function Home() {
  return (
    <div className="home">
      <Banner cover={CliffImg} content={'Chez vous, partout et ailleurs'} />
      <div className="home__gallery">
        {KasaData.map((element) => (
          <Card
            key={`offer-${element.id}}`}
            label={element.title}
            cover={element.cover}
            id={element.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
