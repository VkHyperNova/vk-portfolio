import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/veikko-kiis-221978193/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/VkHyperNova" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/VeikkoKiis/" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials