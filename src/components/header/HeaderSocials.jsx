import React from 'react'
import ReactTooltip from 'react-tooltip'
import socialsIcons from './headerSocialsItems'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {
        socialsIcons.map(({ name, url, icon }, index) => {
          const Icon = icon;
          return (
            <a key={index} data-tip={name} href={url} target="_blank" rel="noopener noreferrer"><Icon /></a>
          )
        })
      }
      <ReactTooltip place="top" type="dark" effect="float" />
    </div>
  )
}

export default HeaderSocials