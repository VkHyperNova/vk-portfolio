import React from 'react'
import './about.css'
import ME from '../../assets/mina.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const data = [
  {
    name: 'Experience',
    desc: '3+ Years Coding',
    icon: FaAward
  },
  {
    name: 'Clients',
    desc: '~3 Clients',
    icon: FiUsers
  },
  {
    name: 'Projects',
    desc: '5+ Completed',
    icon: VscFolderLibrary
  },
]

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {
              data.map(({ name, desc, icon }) => {
                const Icon = icon;
                return (
                  <article className="about__card">
                    <Icon className='about__icon' />
                    <h5>{name}</h5>
                    <small>{desc}</small>
                  </article>
                )
              })
            }
          </div>
          <p>My name is Veikko and I love coding (problem-solving).
            I learn new things every day.
            Every project teaches me something new.
            I learn by doing.
            Most of my project are my own ideas.
            I like backend stuff more than frontend.
            But I can do both. <br /><br />
            My Goal is to be a Fullstack developer one day.
            But I need more experience for that.
            If your stack has some framework or language that is not listed on my portfolio.
            No Problem! Give me time and I will learn it from scratch.<br /><br />
            Currently I am looking for a job. I also can do freelancing.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About