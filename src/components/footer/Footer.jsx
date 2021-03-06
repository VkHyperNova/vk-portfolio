import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

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
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/veikko-kiis-221978193/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/VkHyperNova" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.facebook.com/VeikkoKiis/" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; VK Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer