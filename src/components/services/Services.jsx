import React from 'react'
import './services.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const services = [
  {
    name: 'UI/UX Design',
    desc: [
      {
        item: 'design asd asd asd'
      },
      {
        item: 'asd asd asd asd asd asd'
      },
      {
        item: 'asd asd asd asd asd asd asd asd'
      },
    ]
  },
  {
    name: 'Web Development',
    desc: [
      {
        item: 'webdevv asd asd asd'
      },
      {
        item: 'asd asd asd asd asd asd'
      },
      {
        item: 'asd asd asd asd asd asd asd asd'
      },
    ]
  },
  {
    name: 'Content Creation',
    desc: [
      {
        item: 'content asd asd asd'
      },
      {
        item: 'asd asd asd asd asd asd'
      },
      {
        item: 'asd asd asd asd asd'
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
                {
                  desc.map(({ item }) => {
                    return (
                      <ul className="service__list">
                        <li>
                          <BsPatchCheckFill className='service__list-icon' />
                          <p>{item}</p>
                        </li>
                      </ul>
                    )
                  })
                }
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services


