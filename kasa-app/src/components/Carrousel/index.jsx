import { useState } from 'react'
import '../../styles/_carrousel.sass'

/* Création du composant Carrousel en récupérant en propos l'array d'images présentes dans l'annonce */
function Carrousel({ pictures }) {
  /* Initialisation d'un state servant à stocker le numéro de l'image active */
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="carrousel">
      {pictures.length !== 1 ? (
        <>
          <div className="carrousel__buttons">
          <button
            className="carrousel__buttons-left"
            /* au clic sur le bouton de gauche, on vérifie si activeImg est 0 si oui alors activeImg sera égal à la longueur de l'array d'images - 1 sinon -1 à activeImg */
            onClick={() =>
              setActiveImg(activeImg === 0 ? pictures.length - 1 : activeImg - 1)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className="carrousel__buttons-right"
            /* au clic sur le bouton de droite, on vérifie si activeImg est égal à la longueur de l'array d'images - 1 si oui alors activeImg sera égal 0 sinon + 1 à activeImg */
            onClick={() =>
              setActiveImg(activeImg === pictures.length - 1 ? 0 : activeImg + 1)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
            >
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="carrousel__counter">
          {/* Le compteur se met à jour en fonction du state activeImg + 1 si il n'est pas de 0 sur la longueur du tableau pictures  */}
            {`${activeImg === 0 ? 1 : activeImg + 1}/${pictures.length}`}
        </div>
      </>
      ) : ''}
      <img
        className="carrousel__img-active"
        key={`carrousel-img-${activeImg}`}
        /* src de l'image sera prise dans le tableau pictures a la position égale à activeImg */
        src={pictures[activeImg]}
        alt=""
      />
    </div>
  )
}

export default Carrousel
