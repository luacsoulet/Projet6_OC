import Card from '../../components/Card'
import Banner from '../../components/Banner'
import KasaData from '../../data/data.json'
import '../../styles/_home.sass'
import CliffImg from '../../assets/home-background.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <Banner cover={CliffImg} content={'Chez vous, partout et ailleurs'} />
      <div className="home__gallery">
        {KasaData.map((element) => (
          <Link
            /* Map sur le fichier data pour récupérer les données nécessaires pour le component Card */
            key={`lodging-${element.id}`}
            to={`/lodging/${element.id}`}
          >
            <Card
              /* partage des données en props au component Card */
              key={`offer-${element.id}}`}
              label={element.title}
              cover={element.cover}
              id={element.id}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
