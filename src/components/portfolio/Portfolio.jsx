import React from 'react'
import './portfolio.css'
import PortfolioItems from './portfolioItems'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <div className="container portfolio__container">
        {
          PortfolioItems.map(({ image, title, comment, github, demo }, index) => {
            return (
              <article key={index} className="portfolio__item">
                
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <p>{comment}</p>
                
                <div className="portfolio__item-cta">
                  <a href={github} target='_blank' rel="noopener noreferrer" className='btn blue-bg'>Github</a>
                  <a href={demo} className='btn green-bg' target='_blank' rel="noopener noreferrer">View Page</a>
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