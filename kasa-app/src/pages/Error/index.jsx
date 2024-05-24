import { NavLink } from 'react-router-dom'
import '../../styles/_error.sass'

function Error() {
  return (
    <div className="error">
      <div className="error__404">404</div>
      <div className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <NavLink className="error__home-link" to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  )
}

export default Error
