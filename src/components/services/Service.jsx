import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import './service.css'
const Service = () => {
    return (
    <section id='services'>
    <h5>Rachel Green</h5>
    <h2>Servisler</h2>

    <div className='container services-con'>
        <article className='service'>
            <div className='servive-head'>
                <h3>Garsonluk</h3>
            </div>

            <ul className='service-list'>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
            </ul>
        </article>

        <article className='service'>
            <div className='servive-head'>
                <h3>Barmenlik</h3>
            </div>

            <ul className='service-list'>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
            </ul>
        </article>
        
        <article className='service'>
            <div className='servive-head'>
                <h3>Fashion</h3>
            </div>

            <ul className='service-list'>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
                <li>
                    <AiOutlineCheck className='sevice-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetu elit.</p>
                </li>
            </ul>
        </article>
    </div>

    </section>
    )
}

export default Service