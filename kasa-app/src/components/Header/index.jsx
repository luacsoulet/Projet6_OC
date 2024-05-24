import { NavLink } from 'react-router-dom'
import '../../styles/_header.sass'
import Logo from '../../assets/nav-logo.svg'
import { useState } from 'react'

function Header() {

  const [isSelected, setIsSelected] = useState(false);

  const changeSatete = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <div className="nav">
      <NavLink to="/">
        <img src={Logo} alt="Logo Kasa" />
      </NavLink>
      <div className="nav__links">
        <NavLink className={`nav__link ${isSelected? "active" : null}`} to="/" onClick={changeSatete}>
          Accueil
        </NavLink>
        <NavLink className="nav__link" to="/about">
          A Propos
        </NavLink>
      </div>
    </div>
  )
}

export default Header
