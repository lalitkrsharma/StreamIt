import React from 'react'
import './experience.css'
import {FiCheckCircle} from 'react-icons/fi'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__webdev">
          <h3>Web Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
            <div>
              <SiHtml5 className='experience__details-icon'/>
              {/* <FiCheckCircle /> */}
                <h4>HTML</h4>              
                <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <div>
                <SiCss3 className='experience__details-icon'/>
                 {/* <FiCheckCircle /> */}
                 <h4>CSS</h4>
                 <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <SiJavascript className='experience__details-icon'/>
                {/* <FiCheckCircle /> */}
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
             <div>
              <SiReact className='experience__details-icon'/>
                {/* <FiCheckCircle /> */}
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className='experience__details'>
              <div>
                <FaNodeJs className='experience__details-icon'/>
                {/* <FiCheckCircle /> */}
                <h4>NodeJs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div> 
        </div>

        {/* End Of WebDev */}

        <div className='experience__softwaredev'>

          <h3>Software Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <div>
                <FiCheckCircle className='experience__details-icon'/>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <FiCheckCircle className='experience__details-icon'/>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <FiCheckCircle className='experience__details-icon'/>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <FiCheckCircle className='experience__details-icon'/>
              <h4>OpenCV</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <FiCheckCircle className='experience__details-icon'/>
              <h4>Numpy</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <FiCheckCircle className='experience__details-icon'/>
              <h4>Pandas</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div> 

        </div>
{/* End Of Software Developmemt */}
      </div>
    </section>
  )
}

export default Experience