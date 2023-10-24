import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {LiaFacebookMessenger} from 'react-icons/lia'
import {AiOutlineWhatsApp} from 'react-icons/ai'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>İletişim</h5>
      <h2>Bilgilerim</h2>

      <div className='container contact-con'>
        <div className='contact-options'>
          <article className='contact-option'>
            <AiOutlineMail className='contact-icon'/>
            <h4>Email</h4>
            <h5>abc@gmail.com</h5>
            <a href="mailto:abc@gmail.com">Send a messeage</a>
          </article>

          <article className='contact-option'>
            <LiaFacebookMessenger  className='contact-icon'/>
            <h4>Messenger</h4>
            <h5>abc@gmail.com</h5>
            <a href="https://m.me/profil-sayfan">Send a messeage</a>
          </article>
          
          <article className='contact-option'>
            <AiOutlineWhatsApp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>+90 254 123 456</h5>
            <a href="https://api.whatsapp.com/send?phone+905378595874">Send a messeage</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
