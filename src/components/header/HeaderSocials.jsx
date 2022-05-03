import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import ReactTooltip from 'react-tooltip';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a data-tip="Linkedin" href="https://www.linkedin.com/in/veikko-kiis-221978193/" target="_blank"><BsLinkedin/></a>
        <ReactTooltip place="top" type="dark" effect="float"/>
        <a data-tip="Github" href="https://github.com/VkHyperNova" target="_blank"><FaGithub/></a>
        <ReactTooltip place="top" type="dark" effect="float"/>
        <a data-tip="Facebook" href="https://www.facebook.com/VeikkoKiis/" target="_blank"><BsFacebook /></a>
        <ReactTooltip place="top" type="dark" effect="float"/>
    </div>
  )
}

export default HeaderSocials