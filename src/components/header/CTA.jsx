import React from 'react'
import CV from '../../assets/Show your work.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>CV İNDİR</a>
        <a href="#contact" className='btn-primary btn'>Konuşalım</a>
    </div>
  )
}

export default CTA