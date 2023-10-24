import React from 'react'
import CTA from './CTA'
import './header.css'
import Me from '../../assets/rachel.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div class="container header-con">
        <h5>Merhaba</h5>
        <h1>Ben Rachel</h1>
        <h5 className="text-light">Fashion Icon</h5>
        <CTA/>
        <HeaderSocials/>

        <div class="me">
          <img src={Me} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header