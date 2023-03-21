import React from 'react'
import './footer.css'
// import {BsLinkedin} from 'react-icons/bs'
// import {FaGithub} from 'react-icons/fa'
// import {BsFacebook} from 'react-icons/bs'
// import {SiCodewars} from 'react-icons/si'
import socialsIcons from '../header/headerSocialsItems'
import ReactTooltip from 'react-tooltip'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>VK Portfolio</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        {
          socialsIcons.map(({ name, url, icon }, index) => {
            const Icon = icon;
            return (
              <a key={index} data-tip={name} href={url} target="_blank" rel="noopener noreferrer" className='socials-animation'><Icon /></a>
            )
          })
        }
        <ReactTooltip place="top" type="dark" effect="float" />

      </div>
      <div className="footer__copyright">
        <small>&copy; VK Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer