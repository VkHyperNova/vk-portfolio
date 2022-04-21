import React from 'react'
import CV from '../../assets/VK.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='dl-button'><span>Download CV</span></a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA