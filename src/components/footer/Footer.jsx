import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>Logo</a>

      <ul className='footer-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exper">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#cv">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer-socials'>
      <a href="#"><BsFacebook/></a>
      <a href="#"><BsInstagram/></a>
      <a href="#"><BsTwitter/></a>
      </div>

      <div className='copyright'>
        <small>&copy; handecedim. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer