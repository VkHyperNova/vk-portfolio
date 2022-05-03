import React from 'react'
import './services.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import servicesItems from './servicesItems'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {
          servicesItems.map(({ name, desc }, index) => {
            return (
              <article key={index} className="service">
                <div className="service__head">
                  <h3>{name}</h3>
                </div>
                <ul className="service__list">
                {
                  desc.map(({ item }, index) => {
                    return (
                        <li key={index}>
                          <BsPatchCheckFill className='service__list-icon' />
                          <p>{item}</p>
                        </li>
                    )
                  })
                }
                </ul>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services


