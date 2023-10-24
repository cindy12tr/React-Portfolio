import React from 'react'
import './expert.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Exper = () => {
  return (
    <section id='experience'>
      <h5>Neler Yapabiliyorum</h5>
      <h2>Becerilerim</h2>

      <div className='container ex-con'>
        <div className='singing'>
          <h3>Garsonluk</h3>
          <div className='ex-content'>
            <article className='ex-detais'>
            <BsPatchCheckFill />
            <div>
              <h4>C3</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='ex-detais'>
            <BsPatchCheckFill/>
            <div>
              <h4>C3</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='ex-detais'>
            <BsPatchCheckFill  />
            <div>
              <h4>C3</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='ex-detais'>
            <BsPatchCheckFill  />
            <div>
              <h4>C3</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        <div className='acting'>
        
        <h3>Barmenlik</h3>
          <div className='ex-content'>
            <article className='ex-detais'>
            <BsPatchCheckFill />
            <div>
              <h4>Flirting</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='ex-detais'>
            <BsPatchCheckFill />
            <div>
              <h4>C3</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='ex-detais'>
            <BsPatchCheckFill />
            <div>
              <h4>C3</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='ex-detais'>
            <BsPatchCheckFill />
            <div>
              <h4>C3</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exper