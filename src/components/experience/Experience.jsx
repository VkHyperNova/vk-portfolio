import React from 'react'
import './experience.css'
import experienceItems from './experienceItems'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {
          experienceItems.map(({ name, skills }, index) => {
            return (
              <div key={index}>
                <h3>{name}</h3>
                <div className="experience__content">
                  {
                    skills.map(({ lang, desc, icon }, index) => {
                      const Icon = icon;
                      return (
                        <article key={index} className="experience__details">
                          <div>
                            <Icon className='experience__details-language-icon' />
                            <h4>{lang}</h4>
                            <small className="text-light">{desc}</small>
                          </div>
                        </article>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Experience


