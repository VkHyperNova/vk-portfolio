import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <Link to="home" spy={true} smooth={true} offset={-30} duration={0}>
      <AiOutlineHome/><p>home</p>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-30} duration={0}>
        <AiOutlineUser/><p>about</p>
        </Link>
        <Link to="experience" spy={true} smooth={true} offset={-30} duration={0}>
        <BiBook/><p>experience</p>
        </Link>
        <Link to="services" spy={true} smooth={true} offset={-30} duration={0}>
        <RiServiceLine/><p>services</p>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-30} duration={0}>
        <BiMessageSquareDetail/><p>contact</p>
        </Link>  
    </nav>
  )
}

export default Nav