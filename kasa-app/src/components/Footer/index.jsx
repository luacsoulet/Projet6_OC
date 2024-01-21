import FooterLogo from '../../assets/footer-logo.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__img">
        <img src={FooterLogo} alt="Logo du site Kasa" />
      </div>
      <div className="footer__law-info">© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
