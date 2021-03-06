import { AiFillHtml5, AiOutlineConsoleSql } from 'react-icons/ai'
import { DiCss3, DiJqueryLogo } from 'react-icons/di'
import { SiJavascript, SiBootstrap, SiReact, SiAngular, SiPostgresql, SiExpress, SiGoland, SiPython, SiDjango } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { BsWordpress } from 'react-icons/bs'


const experienceItems = [
    {
      name: 'Frontend',
      skills: [
        {
          lang: 'HTML',
          desc: 'Language',
          icon: AiFillHtml5
        },
        {
          lang: 'CSS',
          desc: 'Language',
          icon: DiCss3
        },
        {
          lang: 'Javascript',
          desc: 'Language',
          icon: SiJavascript
        },
        {
          lang: 'Bootstrap',
          desc: 'Library',
          icon: SiBootstrap
        },
        {
          lang: 'jQuery',
          desc: 'Library',
          icon: DiJqueryLogo
        },
        {
          lang: 'React',
          desc: 'Framework',
          icon: SiReact
        },
        {
          lang: 'Angular JS',
          desc: 'Framework',
          icon: SiAngular
        }
      ]
    },
    {
      name: 'Backend',
      skills: [
        {
          lang: 'MySQL',
          desc: 'Database',
          icon: AiOutlineConsoleSql
        },
        {
          lang: 'PostgreSQL',
          desc: 'Database',
          icon: SiPostgresql
        },
        {
          lang: 'Node JS',
          desc: 'Framework',
          icon: IoLogoNodejs
        },
        {
          lang: 'Express JS',
          desc: 'Framework',
          icon: SiExpress
        },
        {
          lang: 'GOLANG',
          desc: 'Language',
          icon: SiGoland
        },
        {
          lang: 'Python',
          desc: 'Language',
          icon: SiPython
        },
        {
          lang: 'Django',
          desc: 'Framework',
          icon: SiDjango
        },
        {
          lang: 'Wordpress',
          desc: 'CMS',
          icon: BsWordpress
        }
      ]
    } 
]

export default experienceItems