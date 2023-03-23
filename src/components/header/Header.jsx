import React from 'react'
import ReactTooltip from 'react-tooltip'
import socialsIcons from './headerSocialsItems'
import VKFACE from '../../assets/VK-face.png'
import Typical from 'react-typical'
import './header.css'

const Header = () => {
  return (
    <section id="home">
      <header>
        <div className="vk-face-image">
          <img className='vk-img-fluid' src={VKFACE} alt="VK FACE" />
        </div>
        <div className="container header__container">
          <div className='intro__container'>
            <h4 className="hello-animation">Hello, I am</h4>
            <h1 className='name-animation'>Veikko Kiis</h1>
            <Typical loop={1} wrapper="p" className="greeting-animation" steps={['', 1000, 'Nice To Meet You!', 1000]} />
          </div>
          <div className="cta-container">
            <a href="#contact" className='talk-button talk-btn-animation'>Let's Talk</a>
          </div>
          <Typical loop={1} wrapper="h1" className='code-animation' steps={['+', 2000, '11001110101100', 1000]} />

          <div className="header__socials">
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
          <a href="#contact" className="scroll__down scroll-down-animation">Scroll Down</a>
        </div>
      </header>
    </section>
  )
}


export default Header