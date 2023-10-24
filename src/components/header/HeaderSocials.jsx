import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="www.facebook/com" target='_blank'><BsFacebook/></a>
      <a href="www.facebook/com" target='_blank'><BsInstagram/></a>
      <a href="www.facebook/com" target='_blank'><BsTwitter/></a>
      
    </div>
  )
}

export default HeaderSocials