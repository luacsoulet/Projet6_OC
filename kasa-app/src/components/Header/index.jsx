import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/nav-logo.png'

const HomeLogo = styled.img`
  height: 210px;
`

const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 720px
    margin: 45px 0 50px;
`
function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} />
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </NavContainer>
  )
}

export default Header
