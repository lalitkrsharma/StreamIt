import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from "react-icons/bs"
import {SiLeetcode} from "react-icons/si"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href = "https://leetcode.com/lalitkrsharma/" target='_blank'><SiLeetcode /></a>
      <a href = "https://linkedin.com/in/lalitkrsharma" target='_blank'><BsLinkedin /></a>
      <a href = "https://github.com/lalitkrsharma" target='_blank'><BsGithub /></a>
      <a href = "https://twitter.com/lalitkrsharma_" target='_blank'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials