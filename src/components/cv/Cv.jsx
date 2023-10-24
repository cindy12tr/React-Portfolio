import React from 'react'
import './cv.css'

import IMG2 from '../../assets/greendress.webp'
import IMG3 from '../../assets/red dress.webp'



const data = [
    {
        id: 1,
        image: IMG2,
        title: 'Özel Tasarım',
        github: 'www.thatgirrl.com',
        demo: 'www.thatgirrl.com'
    },
    {
        id: 2,
        image: IMG3,
        title: 'Özel Tasarım',
        github: 'www.thatgirrl.com',
        demo: 'www.thatgirrl.com'
    },
    {
        id: 3,
        image: IMG2,
        title: 'Özel Tasarım',
        github: 'www.thatgirrl.com',
        demo: 'www.thatgirrl.com'
    },
    {
        id: 4,
        image: IMG2,
        title: 'Özel Tasarım',
        github: 'www.thatgirrl.com',
        demo: 'www.thatgirrl.com'
    },
    {
        id: 5,
        image: IMG3,
        title: 'Özel Tasarım',
        github: 'www.thatgirrl.com',
        demo: 'www.thatgirrl.com'
    },
    {
        id: 6,
        image: IMG2,
        title: 'Özel Tasarım',
        github: 'www.thatgirrl.com',
        demo: 'www.thatgirrl.com'
    }
]

const Cv = () => {
    return (
    <section id='cv'>
        <h5>Güncel</h5>
        <h2>Portföyüm</h2>

        <div className='container cv-con'>
            {
                data.map(({id, image, title, github, demo})=>{
                    return(
                        <article key={id} className='cv-item'>
                <div className='cv-img'>
                    <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="cv-btn">
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
                    )
                })
            }
        </div>
    </section>
    )
}

export default Cv