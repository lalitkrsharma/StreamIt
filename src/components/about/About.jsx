import React from "react";
import './about.css'
import ME from '../../assets/award.jpg'
import {FaAward} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
          <a href = '#experience'>
            <article className="about__card">              
              <FaAward className='about__icon' />              
              <h5>Experience</h5>
              <small>Fresher</small>
            </article></a>

            <a href = 'https://leetcode.com/lalitkrsharma/' target = 'blank'>
            <article className="about__card">
              <SiLeetcode className='about__icon' />
              <h5>DSA</h5>
              <small>Intermediate</small>
            </article>
              </a>

            <a href = 'https://github.com/lalitkrsharma?tab=repositories' target='blank'>
            <article className="about__card">
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
            </a>
          </div>
          <div>
              <p>
              I'm a Software Developer who specializes in Machine Learning and Artificial Intelligence and I also happen to be one of the Top 100 XR Developers of India (2023) - supported by Meta's XR Open-Source Fellowship program. I'm skilled in multiple programming languages like Python, C++, C, C# & a few others. I've experience in Web Dev, Game Dev, Machine Learning & Generative AI. I'm a skilled communicator with great people skills, I believe in the power of community and especially Open-Source. I'm a trained professional and a proud Indian 🇮🇳.
              </p>

              <a href="#contact" className="btn btn-primary">Reach Out</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
