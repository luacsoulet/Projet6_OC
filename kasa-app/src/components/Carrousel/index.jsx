import { useState } from 'react'
import '../../styles/_carrousel.sass'
function Carrousel({ pictures }) {
  const [activeImg, setActiveImg] = useState(0)
  return (
    <div className="carrousel">
      <div className="carrousel__buttons">
        <button
          className="carrousel__buttons-left"
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
      <img
        className="carrousel__img-active"
        key={`carrousel-img-${activeImg}`}
        src={pictures[activeImg]}
        alt=""
      />
      <div className="carrousel__counter">{`${
        activeImg === 0 ? 1 : activeImg + 1
      }/${pictures.length}`}</div>
    </div>
  )
}

export default Carrousel
