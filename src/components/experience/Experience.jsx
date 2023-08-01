import React from 'react'
import './experience.css'
import {FiCheckCircle} from 'react-icons/fi'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiOpencv} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import {SiPandas} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {SiUnrealengine} from 'react-icons/si'
import {SiEpicgames} from 'react-icons/si'
import {SiBlender} from 'react-icons/si'
import {SiTensorflow} from 'react-icons/si'
import {SiScikitlearn} from 'react-icons/si'
import {SiJupyter} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {FaGit} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FaUnity} from 'react-icons/fa'
import {AiFillCode} from 'react-icons/ai'
import {FaGithubAlt} from 'react-icons/fa'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__webdev">
          <h3>Front-End Development Skills</h3>
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

            <article className='experience__details'>
              <div>
              <FaGit className='experience__details-icon'/>
              <h4>Git</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div> 
        </div>
      {/* End Of WebDev */}

        <div className='experience__softwaredev'>

          <h3>Programming & Coding Skills</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <div>
                <FaPython className='experience__details-icon'/>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <AiFillCode className='experience__details-icon'/>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <FaJava className='experience__details-icon'/>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <SiOpencv className='experience__details-icon'/>
              <h4>OpenCV</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <FaGithubAlt className='experience__details-icon'/>
              <h4>Github Co-Pilot</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div> 

        </div>
      {/* End Of Software Developmemt */}

      <div className='experience__softwaredev'>

          <h3>Machine Learning & Data Science</h3>
          <div className='experience__content'>

          <article className='experience__details'>
              <div>
              <SiNumpy className='experience__details-icon'/>
              <h4>Numpy</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <SiPandas className='experience__details-icon'/>
              <h4>Pandas</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <SiTensorflow className='experience__details-icon'/>
              <h4>TensorFlow</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <SiScikitlearn className='experience__details-icon'/>
              <h4>Scikit-Learn</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <SiJupyter className='experience__details-icon'/>
              <h4>Jupyter NB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div> 

        </div>
      {/* End Of Machine Learning */}

      <div className='experience__softwaredev'>

          <h3>Game Development & 3D Skills</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <div>
                <SiCsharp className='experience__details-icon'/>
                <h4>C#</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <FaUnity className='experience__details-icon'/>
                <h4>Unity</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <SiUnrealengine className='experience__details-icon'/>
                <h4>UE5</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <SiBlender className='experience__details-icon'/>
              <h4>Blender</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
              <SiEpicgames className='experience__details-icon'/>
              <h4>UEFN</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div> 

        </div>
      {/* End Of Game Development */}
      
      </div>
    </section>
  )
}

export default Experience