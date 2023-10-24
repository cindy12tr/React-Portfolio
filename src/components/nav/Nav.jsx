import React from 'react'
import './nav.css'
import {AiOutlineBook, AiOutlineContacts, AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { useState } from 'react'
import {GiHumanTarget} from 'react-icons/gi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#cv" onClick={()=>setActiveNav('#cv')} className={activeNav === '#cv' ? 'active' : ''}><GiHumanTarget/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav