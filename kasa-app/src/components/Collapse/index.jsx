import { useState } from 'react'
import '../../styles/_collapse.sass'

/* Création du composant Collapse en récupérant en props le titre de la collapse et son contenu */
function Collapse({ title, content }) {
  /* set du state isOpen a null pour éviter les animations au chargements de la page */
  const [isOpen, setIsOpen] = useState(null)

  /* On vas vérifier si le props content est un tableau si oui alors on vas faire une fonction map dessus pour en faire une liste sinon on vas l'afficher dans une div */
  const listeContent = Array.isArray(content) ? (
    <ul>
      {content.map((content, i) => (
        <li key={`li-${i}`} className={`content-${i}`}>
          {content}
        </li>
      ))}
    </ul>
  ) : (
    <div>{content}</div>
  )
  return (
    <div className={'collapse'}>
      <div className="collapse__head">
        <div className={'collapse__head-title'}>{title}</div>
        <button
          /* Au clic si isOpen est égal à nul, alors on va lui attribuer true sinon on attribue l'inverse de la valeur de isOpen */
          className={`collapse__head-button-${isOpen}`}
          onClick={() => setIsOpen(isOpen === null ? true : !isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className={`collapse__content-open__${isOpen}`}>{listeContent}</div>
    </div>
  )
}

export default Collapse
