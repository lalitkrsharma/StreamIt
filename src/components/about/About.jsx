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
                Enthusiastic, Passionate, & Curious. I'm a B-Tech Fresher with these 3 qualities who likes to code with some good music and a cup of coffee. Learning to code have been one of the most liberating experiences of my life.
              </p>

              <a href="#contact" className="btn btn-primary">Reach Out</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About