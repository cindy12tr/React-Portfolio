import React from 'react'
import './about.css'
import Me from '../../assets/garson.webp'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2Open} from 'react-icons/bs'
const About = () => {
  return (
    <section id='about'>
      <h5>Beni Tanı</h5>
      <h2>Hakkımda</h2>

      <div className='container about-con'>
        <div className='about-me'>
          <div className="about-img">
            <img src={Me} alt="about image"/>
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
            <FiAward className='about-icon'/>
            <h5>İşim</h5>
            <small>+2 yıl Garsonluk<br/> </small>
            </article>

            <article className='about-card'>
            <FiUsers className='about-icon'/>
            <h5>Müşteri</h5>
            <small>+1000</small>
            </article>
            <article className='about-card'>
            <BsFolder2Open className='about-icon'/>
            <h5>Deneyim</h5>
            <small>+0 </small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, a quos. Molestiae dolore, adipisci, minus harum eaque aperiam corrupti amet dignissimos commodi animi cupiditate quasi. Laudantium est, ratione iste nemo, assumenda dolor cupiditate similique beatae sequi odit sed, labore magnam?</p>
          <a href="#contact" className='btn btn-primary'>Daha Fazla</a>
        </div>
      </div>
    </section>
  )
}

export default About