import React from 'react'
import './experience.css'
import experienceItems from './experienceItems'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container">
        <div className="experience__content">
          {
            experienceItems.map(({ lang, desc, icon }, index) => {
              const Icon = icon;
              return (
                <article key={index}>
                  <div className="experience__details">
                    <Icon className='experience__details-language-icon' />
                    <h2>{lang}</h2>
                    <p>{desc}</p>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Experience


