import React from 'react'
import './header.css'
import CTA from './CTA'
/* import ME from '../../assets/mina-no-bg.png' */
import HeaderSocials from './HeaderSocials'
import Typical from 'react-typical'

const Header = () => {
  return (
    <section id="home">
    <header >
      <div className="container header__container"> 
        <h5 className="greeting-animation">Hello, I am</h5>
        <h1 className='name-animation'>Veikko Kiis</h1>
        <h5 className="do-animation"><Typical loop={1} wrapper="p" steps={['', 1000, 'Nice To Meet You!', 1000]}/></h5>
        <CTA />
        <HeaderSocials />
        {/* <div className="me">
          <img src={ME} alt="me" className='picture-animation'/>
        </div> */}
        <a href="#contact" className="scroll__down animation-blinker">Scroll Down</a>
      </div>
    </header>
    </section>
  )
}


export default Header