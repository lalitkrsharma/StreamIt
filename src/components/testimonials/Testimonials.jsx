import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/rahul.jpeg'

// Import Swiper React components
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Rahul Kumar Madheshiya',
    review:  "I've worked alongside Lalit for close to six months now. In those six months, I've seen him not only excel at the core elements of his responsibilities - like leadership skills, communication skills, but also learn other tasks that extend well beyond the scope of his role, like programming, coding and even taking the opportunities of such responsibilities. Lalit has grown as quickly as our work or duties has, his willingness to learn and take on these responsibilities is something to be desired in any beginner or professional."
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Words I Cherish</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
       {
         data.map(({avatar, name, review}, index) => {
           return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
             {review}
            </small>
          </SwiperSlide>
           )
         })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials