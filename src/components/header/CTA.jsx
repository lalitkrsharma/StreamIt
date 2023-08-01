import React from 'react'
import CV from '../../assets/resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
    <a href ={CV} download className='btn'>Download CV</a>
    <a href ="https://linkedin.com/in/lalitkrsharma" className='btn btn-primary'>My LinkedIn</a>
    </div>
  )
}

export default CTA