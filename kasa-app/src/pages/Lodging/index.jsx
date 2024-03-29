import { Navigate, useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import LodgingData from '../../data/data.json'
import '../../styles/_lodging.sass'

function Lodging() {
  // Récupération de l'id avec useParams()
  const { id: queryId } = useParams()

  // Vérification si l'id existe dans les données
  const lodgingData = LodgingData.some((el) => el.id === queryId)

  // S'il n'existe pas, alors naviguer à la page error
  if (!lodgingData) {
    return <Navigate to={'/*'} replace={true} />
  }

  // trouver les données correspondantes à l'id de l'annonce
  const LogementData = LodgingData.find((el) => el.id === queryId)

  // déstructuration des données récupérées
  const {
    title,
    description,
    rating,
    location,
    pictures,
    host,
    equipments,
    tags,
  } = LogementData

  // définition de la range des étoiles de notation
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="logding">
      <Carrousel pictures={pictures} />
      <div className="lodging__infos">
        <div className="lodging__infos-left">
          <div className="lodging__infos-left-title">{title}</div>
          <div className="lodging__infos-left-location">{location}</div>
          <div className="lodging__infos-left-tags">
            {
              // Map sur le tableau tags pour afficher les différents tag de l'annonce
              tags.map((tag, i) => (
                <div key={`tag-${i}`} className="tag">
                  {tag}
                </div>
              ))
            }
          </div>
        </div>
        <div className="lodging__infos-right">
          <div className="lodging__infos-right-host">
            <div className="lodging__infos-right-host-name">{host.name}</div>
            <div className="lodging__infos-right-host-cover">
              <img src={host.picture} alt="Portrait du propriétaire" />
            </div>
          </div>
          <div className="lodging__infos-right-stars">
            <div className="stars-container">
              {
                // Map sur le tableau range pour attribuer si rating est supérieur ou égale aux chiffres rating, si oui alors className prend active sinon inactive
                range.map((rangeEl, i) => (
                  <div
                    key={`star-${i}`}
                    className={`star ${
                      parseInt(rating) >= rangeEl ? 'active' : 'inactive'
                    }`}
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
                        fill={`${
                          parseInt(rating) >= rangeEl ? '#FF6060' : '#E3E3E3'
                        }`}
                      />
                    </svg>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="lodging__collapses">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={equipments} />
      </div>
    </div>
  )
}

export default Lodging
