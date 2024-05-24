import { NavLink } from 'react-router-dom'
import '../../styles/_header.sass'
import Logo from '../../assets/nav-logo.svg'
import { useState } from 'react'

function Header() {

  const [isSelected, setIsSelected] = useState(null);

  return (
    <div className="nav">
      <NavLink to="/">
        <img src={Logo} alt="Logo Kasa" />
      </NavLink>
      <div className="nav__links">
        <NavLink className={`nav__link ${isSelected === 1 ? "active" : ""}`} to="/" onClick={() => setIsSelected(1)}>
          Accueil
        </NavLink>
        <NavLink className={`nav__link ${isSelected === 2 ? "active" : ""}`} to="/about" onClick={() => setIsSelected(2)}>
          A Propos
        </NavLink>
      </div>
    </div>
  )
}

export default Header
