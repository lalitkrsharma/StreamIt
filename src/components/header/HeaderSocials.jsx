import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href = "www.linkedin.com/in/lalitkrsharma" target='_blank'><BsLinkedin /></a>
      <a href = "www.github.com/lalitkrsharma" target='_blank'><BsGithub /></a>
      <a href = "www.twitter.com/lalitkrsharma_" target='_blank'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials