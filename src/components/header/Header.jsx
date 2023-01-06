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
        <h5 className="text-light shrink-text-animation">Hello I am</h5>
        {/* <h1 className='flash-animation'>Veikko Kiis</h1>
        <h5 className="text-light pop-out"><Typical loop={Infinity} wrapper="p" steps={['Programmer', 1000, 'Web-developer', 1000, 'Problem-solver', 1000]}/></h5> */}
        {/* <CTA />
        <HeaderSocials /> */}
        {/* <div className="me">
          <img src={ME} alt="me" className='profile-image-animation'/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a> */}
      </div>
    </header>
    </section>
  )
}


export default Header