import React from 'react'
import './experience.css'

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { DiJqueryLogo } from 'react-icons/di'
import { SiReact } from 'react-icons/si'
import { SiAngular } from 'react-icons/si'
import { RiPsychotherapyLine } from 'react-icons/ri'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { SiPostgresql } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { SiExpress } from 'react-icons/si'
import { SiGoland } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { BsWordpress } from 'react-icons/bs'
import { SiDjango } from 'react-icons/si'

const stack = [
  {
    name: 'Frontend Development',
    skills: [
      {
        lang: 'HTML',
        desc: 'Experienced',
        icon: AiFillHtml5
      },
      {
        lang: 'CSS',
        desc: 'Experienced',
        icon: DiCss3
      },
      {
        lang: 'Javascript',
        desc: 'Experienced',
        icon: SiJavascript
      },
      {
        lang: 'Bootstrap',
        desc: 'Experienced',
        icon: SiBootstrap
      },
      {
        lang: 'jQuery',
        desc: 'Experienced',
        icon: DiJqueryLogo
      },
      {
        lang: 'React JS',
        desc: 'Some Experience (This website)',
        icon: SiReact
      },
      {
        lang: 'Angular JS',
        desc: 'Some Experience',
        icon: SiAngular
      },
      {
        lang: 'Other JS Libraries',
        desc: 'Some Experience, Learning',
        icon: RiPsychotherapyLine
      }
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      {
        lang: 'MySQL',
        desc: 'Experienced',
        icon: AiOutlineConsoleSql
      },
      {
        lang: 'PostgreSQL',
        desc: 'Experienced',
        icon: SiPostgresql
      },
      {
        lang: 'Node JS',
        desc: 'Experienced',
        icon: IoLogoNodejs
      },
      {
        lang: 'Express JS',
        desc: 'Experienced',
        icon: SiExpress
      },
      {
        lang: 'GO LANGUAGE',
        desc: 'Experienced',
        icon: SiGoland
      },
      {
        lang: 'Python',
        desc: 'Experienced',
        icon: SiPython
      },
      {
        lang: 'Django',
        desc: 'Some Experience',
        icon: SiDjango
      },
      {
        lang: 'Wordpress (PHP)',
        desc: 'Some Experience',
        icon: BsWordpress
      },
      {
        lang: 'C# and Java',
        desc: 'Some Experience. Learning',
        icon: RiPsychotherapyLine
      }
    ]
  }

]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {
          stack.map(({ name, skills }) => {
            return (
              <div className="experience__frontend">
                <h3>{name}</h3>
                <div className="experience__content">
                  {
                    skills.map(({ lang, desc, icon }) => {
                      const Icon = icon;
                      return (
                        <article className="experience__details">
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


