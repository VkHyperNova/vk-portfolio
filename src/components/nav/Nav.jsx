import React from 'react'
import './nav.css'
import { Link } from 'react-scroll'
import navItems from './navItems'

const Nav = () => {
  return (
    <nav>
      {
        navItems.map(({ name, icon }, index) => {
          const Icon = icon;
          return (
            <Link key={index} to={name} spy={true} smooth={true} offset={-30} duration={0}>
              <Icon /><p>{name}</p>
            </Link>
          )   
        })
      }
    </nav>
  )
}

export default Nav