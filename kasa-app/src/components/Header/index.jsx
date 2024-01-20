import { NavLink } from 'react-router-dom'
import '../../styles/_header.sass'
import Logo from '../../assets/nav-logo.svg'

function Header() {
  return (
    <div className="navContainer">
      <NavLink to="/">
        <img src={Logo} alt="Logo Kasa" />
      </NavLink>
      <div>
        <NavLink className="styledNavLink" to="/">
          Accueil
        </NavLink>
        <NavLink className="styledNavLink" to="/about">
          A Propos
        </NavLink>
      </div>
    </div>
  )
}

export default Header
