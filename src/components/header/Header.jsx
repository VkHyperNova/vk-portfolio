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
        {/* <Typical loop={1} wrapper="h5" className="text-animation" steps={['Hello, I am', 1000]}/> */}
        <h5 className="text-light greeting-animation">Hello, I am</h5>
        <h1 className='name-animation'>Veikko Kiis</h1>
        <h5 className="text-light do-animation"><Typical loop={Infinity} wrapper="p" steps={['', 2000, 'I write', 1000, '0101010101010101010101', 1000]}/></h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className='picture-animation'/>
        </div>
        <a href="#contact" className="scroll__down scrolldown-animation">Scroll Down</a>
      </div>
    </header>
    </section>
  )
}


export default Header