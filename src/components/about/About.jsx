import React from 'react'
import './about.css'
import AboutItems, {aboutTextp1, aboutTextp2, aboutTextp3} from './aboutItems'

const About = () => { 
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container">
        <div className="about__content">
          <div className="about__cards">
            {
              AboutItems.map(({ name, desc, icon }, index) => {
                const Icon = icon;
                return (
                  <article key={index} className="about__card">
                    <Icon className='about__icon' />
                    <h2>{name}</h2>
                    <h4>{desc}</h4>
                  </article>
                )
              })
            }
          </div>
          <p>{aboutTextp1}<br/><br/>{aboutTextp2}<br/><br/>{aboutTextp3}</p>
        </div>
      </div>
    </section>
  )
}

export default About