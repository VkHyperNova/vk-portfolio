import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mina-no-bg.png'
import HeaderSocials from './HeaderSocials'

import Typical from 'react-typical'

const Header = () => {
  return (
    <section id="home">
    <header >
      <div className="container header__container"> 
        <h5 className="text-light">Hello I am</h5>
        <h1>Veikko Kiis</h1>
        <h5 className="text-light"><Typical loop={Infinity} wrapper="p" steps={['Programmer', 1000, 'Web-developer', 1000, 'Coder', 1000]}/></h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
    </section>
  )
}


export default Header