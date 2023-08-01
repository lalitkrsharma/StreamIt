import React from 'react'
import './portfolio.css'
import {SiGithub} from 'react-icons/si'
import {MdComputer} from 'react-icons/md'
import IMG1 from '../../assets/ZA.png'
import IMG2 from '../../assets/1SS.png'
import IMG3 from '../../assets/openCV.png'
import IMG4 from '../../assets/site.png'

const data = [
    {
      id:1,
      image:IMG1,
      title: 'Virtual Anatomy : An Educational Unity game for learning Human Anatomy ( XROS-23 )',
      github: 'https://github.com/LluisV/Z-Anatomy-testing.git',
      demo: "https://ea83b04d-a4b7-47ae-92a6-97060c44f286.filesusr.com/archives/8937f4_4b4f2310723b47f0a16ec1c6658e5f0f.zip?dn=Z-Anatomy_W64_0.9.9.7.5_Portable.zip"
    },

    {
      id:2,
      image:IMG2,
      title: '1StopShop : An E-commerce website with Stripe Payment Integration.',
      github: 'https://github.com/lalitkrsharma/1StopShop',
      demo: 'https://1-stop-shop.vercel.app/'
    },

    {
      id:3,
      image:IMG3,
      title: 'Pose & Face Detection project using Mediapipe & Opencv',
      github: 'https://github.com/lalitkrsharma/Human-Pose-Detector-Open-CV-.git',
      demo: 'https://github.com/lalitkrsharma/Human-Pose-Detector-Open-CV-.git'
    },

    {
      id:4,
      image:IMG4,
      title: 'Dynamic Portfolio Website using React, Javascript, CSS & HTML',
      github: 'https://github.com/lalitkrsharma/portfolio.git',
      demo: 'https://lalitkrsharma.github.io/portfolio/'
    },

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
                  <a href={github} className='btn btn-primary' target='_blank'>
                    <div>
                      <SiGithub className='.portfolio__item-icon'/>
                    </div>
                    Github
                  </a>
                  <a href={demo} className='btn' target='_blank'>
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