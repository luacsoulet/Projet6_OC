import { useParams } from 'react-router-dom'
import Lodging from '../../pages/Lodging'

function LodgingContainer() {
  const { id } = useParams()
  return <Lodging id={id} />
}

export default LodgingContainer
