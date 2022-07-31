import React from 'react'
import './nav.css'
import {Link} from 'react-scroll'
import {GoHome} from 'react-icons/go'
import {BiUserCircle} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessageLine} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    
    <nav>
      <Link to="home" spy={false} smooth={true} offset={-30} duration={500} onClick={() => setActiveNav("#")} className={activeNav === "#"?'active':''}><GoHome /></Link>
      <Link to="about" spy={false} smooth={true} offset={-30} duration={500} onClick={() => setActiveNav('#about')}className={activeNav === '#about'?'active':''}><BiUserCircle /></Link>
      <Link to="experience" spy={false} smooth={true} offset={-30} duration={500} onClick={() => setActiveNav('#experience')}className={activeNav === '#experience'?'active':''}><BiBook /></Link>
      <Link to="services" spy={false} smooth={true} offset={-70} duration={500} onClick={() => setActiveNav('#services')}className={activeNav === '#services'?'active':''}><RiServiceLine /></Link>
      <Link to="contact" spy={false} smooth={true} offset={-5} duration={500} onClick={() => setActiveNav('#contact')}className={activeNav === '#contact'?'active':''}><RiMessageLine /></Link>
    </nav>
    
  )
 
}

export default Nav