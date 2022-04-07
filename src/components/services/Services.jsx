import React from 'react'
import './services.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const services = [
  {
    name: 'UI/UX Design',
    desc: [
      {
        item: 'Websites'
      },
      {
        item: 'Landing pages'
      },
      {
        item: 'Mobile apps'
      },
      {
        item: 'SaaS (Coming Soon)'
      },
    ]
  },
  {
    name: 'Web Development',
    desc: [
      {
        item: 'Landing pages'
      },
      {
        item: 'Personal websites'
      },
      {
        item: 'Corporate websites'
      },
      {
        item: 'E-commerce websites'
      },
      {
        item: 'Blog sites'
      },
      {
        item: 'Portfolio sites'
      },
    ]
  },
  {
    name: 'Other',
    desc: [
      {
        item: 'Website administration'
      },
      {
        item: 'Consulting and help Fixing Bugs'
      },
      {
        item: 'Updating/Adding new features for existing websites'
      },
      {
        item: 'Making Windows Software'
      },
    ]
  }
]
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {
          services.map(({ name, desc }) => {
            return (
              <article className="service">
                <div className="service__head">
                  <h3>{name}</h3>
                </div>
                <ul className="service__list">
                {
                  desc.map(({ item }) => {
                    return (
                        <li>
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


