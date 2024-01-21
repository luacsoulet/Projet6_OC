import '../../styles/_error.sass'

function Error() {
  return (
    <div className="error">
      <div className="error__404">404</div>
      <div className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="error__home-link">Retourner sur la page d’accueil</div>
    </div>
  )
}

export default Error
