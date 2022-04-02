import React from 'react'
import './about.css'
import ME from '../../assets/mina.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


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
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Coding</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>~3 Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>My name is Veikko and I love coding (problem-solving).
            I learn new things every day.
             Every project teaches me something new.
            I learn by doing. 
            Most of my project are my own ideas. 
            I like backend stuff more than frontend. 
            But I can do both. <br/><br/>
            My Goal is to be a Fullstack developer one day. 
            But I need more experience for that.
            If your stack has some framework or language that is not listed on my portfolio. 
            No Problem! Give me time and I will learn it from scratch.<br/><br/>
            Currently I am looking for a job. I also can do freelancing.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About