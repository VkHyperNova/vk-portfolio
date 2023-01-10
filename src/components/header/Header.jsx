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
          <div className='intro_container'>
            <h4 className="hello-animation">Hello, I am</h4>
            <h1 className='name-animation'>Veikko Kiis</h1>
            <Typical loop={1} wrapper="p" className="greeting-animation" steps={['', 1000, 'Nice To Meet You!', 1000]} />
          </div>
          <CTA />
          <Typical loop={1} wrapper="h1" className='code-animation' steps={['+', 2000, '11001110101100', 1000]} />
          <HeaderSocials />
          {/* <div className="me">
          <img src={ME} alt="me" className='picture-animation'/>
        </div> */}
          <a href="#contact" className="scroll__down scroll-down-animation">Scroll Down</a>
        </div>
      </header>
    </section>
  )
}


export default Header