import React from "react";
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
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
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Users</h5>
              <small>50+ in India</small>
            </article>

            <article className="about__card">
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <div>
              <p>
                I'm a B.Tech-Computer Science Fresher from the Arka Jain University's Engineering Department. I like to code along with some music as it sparks the creativity required for problem solving.
              </p>

              <a href="#contact" className="btn btn-primary">Reach Out</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About