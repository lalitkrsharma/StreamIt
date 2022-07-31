import React from 'react'
import './footer.css'
import {SiLeetcode, SiTwitter} from 'react-icons/si'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lalit</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>       
        <a href="https://twitter.com/lalitkrsharma_" target='_blank'><SiTwitter/></a>
        <a href="https://leetcode.com/lalitkrsharma/" target='_blank'><SiLeetcode/></a>
        <a href="https://github.com/lalitkrsharma" target='_blank'><SiGithub/></a>
        <a href="https://linkedin.com/in/lalitkrsharma" target='_blank'><SiLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Lalit's Portfolio Site. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer