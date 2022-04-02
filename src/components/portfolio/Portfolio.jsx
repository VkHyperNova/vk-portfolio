import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

/* data for the map */
const data = [
  {
    image: IMG1,
    title: 'Test Project 1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    image: IMG1,
    title: 'Test Project 1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    image: IMG1,
    title: 'Test Project 1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    image: IMG1,
    title: 'Test Project 1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    image: IMG1,
    title: 'Test Project 1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    image: IMG1,
    title: 'Test Project 1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">

        {/* iterate over map */}
       {
         data.map(({image, title, github, demo}, index) => {
           return (
            <article key={index} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
           )
         })
       }

      </div>

    </section>
  )
}

export default Portfolio