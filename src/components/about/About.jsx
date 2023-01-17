import React from 'react'
import './about.css'
import ME from '../../assets/mina-no-bg.png'
import AboutItems, {aboutTextp1, aboutTextp2, aboutTextp3} from './aboutItems'

const About = () => { 
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ME" className='about-image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {
              AboutItems.map(({ name, desc, icon }, index) => {
                const Icon = icon;
                return (
                  <article key={index} className="about__card">
                    <Icon className='about__icon' />
                    <h5>{name}</h5>
                    <small>{desc}</small>
                  </article>
                )
              })
            }
          </div>
          <p>{aboutTextp1}<br/><br/>{aboutTextp2}<br/><br/>{aboutTextp3}</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About