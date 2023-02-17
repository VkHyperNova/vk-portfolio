import React from 'react'
import CV from '../../assets/VK.pdf'

const CTA = () => {
  return (
    <div className="cta-container">
        {/* <a href={CV} download className='dl-button download-cv-animation'><span>Download CV</span></a> */}
        <a href="#contact" className='talk-button talk-btn-animation'>Let's Talk</a>
    </div>
  )
}

export default CTA