import React from 'react'
import './services.css'

import { BsPatchCheckFill } from 'react-icons/bs'

const design = [
  {
    desc: 'Lorem  ipsum dolor sit amet consecteturipsum dolor sit amet consecteturipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores' 
  },
  {
    desc: 'Lorem ipsum '
  },
  {
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores'
  },
]

const web_dev = [
  {
    desc: 'asdasdasdas dasddasdasddasdasddasd asddasdasdasdsad asdsadadsadasdasdasda'
  },
  {
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. TeLorem ipsum dolor sit amet consectetur adipisicing elit. Te'
  },
  {
    desc: 'asd'
  },
]

const win = [
  {
    desc: 'asd'
  },
  {
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. TeLorem ipsum dolor sit amet consectetur adipisicing elit. TeLorem ipsum dolor sit amet consectetur adipisicing elit. Te'
  },
  {
    desc: 'asd'
  },
]

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* UI/UX Design*/}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          {
            design.map(({ desc }, index) => {
              return (
                <ul key={index} className="service__list">
                  <li>
                    <BsPatchCheckFill className='service__list-icon' />
                    <p>{desc}</p>
                  </li>
                </ul>

              )
            })
          }
        </article>

        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          {
            web_dev.map(({ desc }, index) => {
              return (
                <ul key={index} className="service__list">
                  <li>
                    <BsPatchCheckFill className='service__list-icon' />
                    <p>{desc}</p>
                  </li>
                </ul>

              )
            })
          }
        </article>

        {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          {
            win.map(({ desc }, index) => {
              return (
                <ul key={index} className="service__list">
                  <li>
                    <BsPatchCheckFill className='service__list-icon' />
                    <p>{desc}</p>
                  </li>
                </ul>

              )
            })
          }
        </article>

      </div>
    </section>
  )
}

export default Services