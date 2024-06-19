import React from 'react'
import '../testimonials/testimonials.css'
import AVTR1 from '../../assets/rahul.jpg'
import AVTR2 from '../../assets/shree.png'
import AVTR3 from '../../assets/muzzu.png'
import AVTR4 from '../../assets/mu.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Rahul Chavan",
    review: "Working with Akshay was a fantastic experience! Their creativity, attention to detail, and dedication exceeded our expectations. The final product was stunning and delivered on time. Highly recommended!"
  },
  {
    avatar: AVTR2,
    name: "Shirish Yenganti",
    review: "Highly impressed with Akshay's work! They brought fresh ideas and executed them flawlessly. Their attention to detail and commitment to quality were evident throughout the project. Great collaboration!"
  },
  {
    avatar: AVTR3,
    name: "Muzzamil Shaikh",
    review: "An amazing experience from start to finish! Akshay's expertise and creative approach resulted in a stunning final product. They were responsive and attentive to our needs. Will definitely work together again!"
  },
  {
    avatar: AVTR4,
    name: "Muzammil Alloli",
    review: "Akshay transformed our vision into reality with their incredible design skills. The project was completed ahead of schedule and surpassed all our expectations. We couldn't be happier with the results!"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({avatar,name,review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar} alt={name}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
                {review}
              </small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials