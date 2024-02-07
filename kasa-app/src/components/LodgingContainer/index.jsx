import { useParams } from 'react-router-dom'
import Lodging from '../../pages/Lodging'

function LodgingContainer() {
  /* On récupère l'id dans l'RL pour la donner en props à la page Lodging  */
  const { id } = useParams()
  return <Lodging id={id} />
}
export default LodgingContainer
