import React from 'react'
import './portfolio.css'
import {SiGithub} from 'react-icons/si'
import {MdComputer} from 'react-icons/md'
import IMG1 from '../../assets/openCV.png'
import IMG2 from '../../assets/portfolio.jpg'

const data = [
    {
      id:1,
      image:IMG1,
      title: 'Pose & Face Detection project using Mediapipe & Opencv',
      github: 'https://github.com/lalitkrsharma/Human-Pose-Detector-Open-CV-.git',
      demo: IMG1
    },

    {
      id:2,
      image:IMG2,
      title: 'Dynamic Portfolio Website using React, Javascript, CSS & HTML',
      github: 'https://github.com/lalitkrsharma/portfolio.git',
      demo: 'https://lalitkrsharma.github.io/portfolio/'
    }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       
        {
          data.map(({id ,image, title, github ,demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>
                    <div>
                      <SiGithub className='.portfolio__item-icon'/>
                    </div>
                    Github
                  </a>
                  <a href={demo} className='btn btn-primary' target='_blank'>
                    <div>
                      <MdComputer className='.portfolio__item-icon'/>
                    </div>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio