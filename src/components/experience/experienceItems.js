import { AiFillHtml5, AiOutlineConsoleSql } from 'react-icons/ai'
import { DiCss3, DiJqueryLogo } from 'react-icons/di'
import { SiJavascript, SiBootstrap, SiReact, SiAngular, SiPostgresql, SiExpress, SiGoland, SiPython, SiDjango } from 'react-icons/si'
import { RiPsychotherapyLine } from 'react-icons/ri'
import { IoLogoNodejs } from 'react-icons/io'
import { BsWordpress } from 'react-icons/bs'

const experienceItems = [
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
          desc: 'Some Experience',
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

export default experienceItems