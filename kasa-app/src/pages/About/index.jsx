import MountainImg from '../../assets/about-background.png'
import '../../styles/_about.sass'

function About() {
  return (
    <div className="about">
      <div className="about__img">
        <img src={MountainImg} alt="Fond de la page a propos" />
      </div>
    </div>
  )
}

export default About
