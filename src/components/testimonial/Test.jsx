import React from 'react'
import './test.css'
import Client from '../../assets/me.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    id: 1,
    avatar: Client,
    name: 'Tina',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo minus consectetur impedit hic doloribus accusantium et omnis neque quos numquam?'
  },
  {
    id: 2,
    avatar: Client,
    name: 'Tina',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo minus consectetur impedit hic doloribus accusantium et omnis neque quos numquam?'
  },
  {
    id: 3,
    avatar: Client,
    name: 'Tina',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo minus consectetur impedit hic doloribus accusantium et omnis neque quos numquam?'
  },
  {
    id: 4,
    avatar: Client,
    name: 'Tina',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo minus consectetur impedit hic doloribus accusantium et omnis neque quos numquam?'
  }
]

export const Test = () => {
  return (
    <section id='testimonials'>
      <h5>Müşterilerimin</h5>
      <h2>Yorumları</h2>

      <Swiper className='container test-con'
      // install Swiper modules
      modules={[ Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({id, avatar, name, review})=>{
          return(
            <SwiperSlide key={id} className='test'>
          <div className='client-img'>
            <img src={avatar} alt=""/>
          </div>
          <h5>{name}</h5>
            <small>{review}</small>
        </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}
