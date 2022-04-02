import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>


      {/* Frontend */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            {/* HTML */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* CSS */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* JAVASCRIPT */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            
            {/* Bootstrap */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* JQuery */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>jQuery</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* React JS */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React JS</h4>
              <small className="text-light">Some Experience</small>
              </div>
            </article>

            {/* Angular JS */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Angular JS</h4>
              <small className="text-light">Some Experience</small>
              </div>
            </article> 

            {/* Other JS Libraries*/}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Other JS Libraries</h4>
              <small className="text-light">Some Experience</small>
              </div>
            </article> 
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            
            {/* MySQL */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* Postgres */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* Node JS */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* Express JS */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Express JS</h4>
              <small className="text-light">Some Experience</small>
              </div>
            </article>

            {/* GOLANG */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>GO LANGUAGE</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* Python */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python and Django</h4>
              <small className="text-light">Some Experience</small>
              </div>
            </article>

            {/* Wordpress and php */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Wordpress (PHP)</h4>
              <small className="text-light">Some Experience</small>
              </div>
            </article>

            {/* C# and Java */}
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C# and Java</h4>
              <small className="text-light">Learning</small>
              </div>
            </article>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience